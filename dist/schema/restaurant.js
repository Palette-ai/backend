"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantMutation = exports.RestaurantQuery = undefined;

var _Restaurant = require("../models/Restaurant");

const RestaurantQuery = {
  restaurantById: _Restaurant.RestaurantTC.getResolver('findById'),
  restaurantByIds: _Restaurant.RestaurantTC.getResolver('findByIds'),
  restaurantOne: _Restaurant.RestaurantTC.getResolver('findOne'),
  restaurantMany: _Restaurant.RestaurantTC.getResolver('findMany'),
  restaurantCount: _Restaurant.RestaurantTC.getResolver('count'),
  restaurantConnection: _Restaurant.RestaurantTC.getResolver('connection'),
  restaurantPagination: _Restaurant.RestaurantTC.getResolver('pagination')
};
const RestaurantMutation = {
  restaurantCreateOne: _Restaurant.RestaurantTC.getResolver('createOne'),
  restaurantCreateMany: _Restaurant.RestaurantTC.getResolver('createMany'),
  restaurantUpdateById: _Restaurant.RestaurantTC.getResolver('updateById'),
  restaurantUpdateOne: _Restaurant.RestaurantTC.getResolver('updateOne'),
  restaurantUpdateMany: _Restaurant.RestaurantTC.getResolver('updateMany'),
  restaurantRemoveById: _Restaurant.RestaurantTC.getResolver('removeById'),
  restaurantRemoveOne: _Restaurant.RestaurantTC.getResolver('removeOne'),
  restaurantRemoveMany: _Restaurant.RestaurantTC.getResolver('removeMany')
};
exports.RestaurantQuery = RestaurantQuery;
exports.RestaurantMutation = RestaurantMutation;