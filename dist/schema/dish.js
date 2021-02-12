"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishMutation = exports.DishQuery = undefined;

var _Dish = require("../models/Dish");

const DishQuery = {
  dishById: _Dish.DishTC.getResolver('findById'),
  dishByIds: _Dish.DishTC.getResolver('findByIds'),
  dishOne: _Dish.DishTC.getResolver('findOne'),
  dishMany: _Dish.DishTC.getResolver('findMany'),
  dishCount: _Dish.DishTC.getResolver('count'),
  dishConnection: _Dish.DishTC.getResolver('connection'),
  dishPagination: _Dish.DishTC.getResolver('pagination')
};
const DishMutation = {
  dishCreateOne: _Dish.DishTC.getResolver('createOne'),
  dishCreateMany: _Dish.DishTC.getResolver('createMany'),
  dishUpdateById: _Dish.DishTC.getResolver('updateById'),
  dishUpdateOne: _Dish.DishTC.getResolver('updateOne'),
  dishUpdateMany: _Dish.DishTC.getResolver('updateMany'),
  dishRemoveById: _Dish.DishTC.getResolver('removeById'),
  dishRemoveOne: _Dish.DishTC.getResolver('removeOne'),
  dishRemoveMany: _Dish.DishTC.getResolver('removeMany')
};
exports.DishQuery = DishQuery;
exports.DishMutation = DishMutation;