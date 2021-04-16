import { Menu, MenuTC } from '../models/menu.js';

const MenuQuery = {
  menuById: MenuTC.mongooseResolvers.findById(),
  menuByIds: MenuTC.mongooseResolvers.findByIds(),
  menuOne: MenuTC.mongooseResolvers.findOne(),
  menuMany: MenuTC.mongooseResolvers.findMany(),
  menuCount: MenuTC.mongooseResolvers.count(),
  menuConnection: MenuTC.mongooseResolvers.connection(),
  menuPagination: MenuTC.mongooseResolvers.pagination(),
};

const MenuMutation = {
  menuCreateOne: MenuTC.mongooseResolvers.createOne(),
  menuCreateMany: MenuTC.mongooseResolvers.createMany(),
  menuUpdateById: MenuTC.mongooseResolvers.updateById(),
  menuUpdateOne: MenuTC.mongooseResolvers.updateOne(),
  menuUpdateMany: MenuTC.mongooseResolvers.updateMany(),
  menuRemoveById: MenuTC.mongooseResolvers.removeById(),
  menuRemoveOne: MenuTC.mongooseResolvers.removeOne(),
  menuRemoveMany: MenuTC.mongooseResolvers.removeMany(),

  // append elements to arrays
  menuAddDish: {
    type: MenuTC,
    args: { menu_id: 'String!', dish_id: 'String!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const menu = await Menu.update(
        { _id: args.menu_id },
        { $addToSet: { dish_ids: args.dish_id } }
      );
      if (!menu) return null; // or gracefully return an error etc...
      return Menu.findOne({ _id: args.menu_id }); // return the record
    },
  },
};

export { MenuQuery, MenuMutation };
