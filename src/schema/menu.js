import { Menu, MenuTC } from '../models/menu.js';

const MenuQuery = {
  menuById: MenuTC.getResolver('findById'),
  menuByIds: MenuTC.getResolver('findByIds'),
  menuOne: MenuTC.getResolver('findOne'),
  menuMany: MenuTC.getResolver('findMany'),
  menuCount: MenuTC.getResolver('count'),
  menuConnection: MenuTC.getResolver('connection'),
  menuPagination: MenuTC.getResolver('pagination'),
};

const MenuMutation = {
  menuCreateOne: MenuTC.getResolver('createOne'),
  menuCreateMany: MenuTC.getResolver('createMany'),
  menuUpdateById: MenuTC.getResolver('updateById'),
  menuUpdateOne: MenuTC.getResolver('updateOne'),
  menuUpdateMany: MenuTC.getResolver('updateMany'),
  menuRemoveById: MenuTC.getResolver('removeById'),
  menuRemoveOne: MenuTC.getResolver('removeOne'),
  menuRemoveMany: MenuTC.getResolver('removeMany'),

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
