"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuMutation = exports.MenuQuery = undefined;

var _Menu = require("../models/Menu");

const MenuQuery = {
  menuById: _Menu.MenuTC.getResolver('findById'),
  menuByIds: _Menu.MenuTC.getResolver('findByIds'),
  menuOne: _Menu.MenuTC.getResolver('findOne'),
  menuMany: _Menu.MenuTC.getResolver('findMany'),
  menuCount: _Menu.MenuTC.getResolver('count'),
  menuConnection: _Menu.MenuTC.getResolver('connection'),
  menuPagination: _Menu.MenuTC.getResolver('pagination')
};
const MenuMutation = {
  menuCreateOne: _Menu.MenuTC.getResolver('createOne'),
  menuCreateMany: _Menu.MenuTC.getResolver('createMany'),
  menuUpdateById: _Menu.MenuTC.getResolver('updateById'),
  menuUpdateOne: _Menu.MenuTC.getResolver('updateOne'),
  menuUpdateMany: _Menu.MenuTC.getResolver('updateMany'),
  menuRemoveById: _Menu.MenuTC.getResolver('removeById'),
  menuRemoveOne: _Menu.MenuTC.getResolver('removeOne'),
  menuRemoveMany: _Menu.MenuTC.getResolver('removeMany')
};
exports.MenuQuery = MenuQuery;
exports.MenuMutation = MenuMutation;