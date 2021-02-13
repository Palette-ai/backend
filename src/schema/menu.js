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
};

export { MenuQuery, MenuMutation };
