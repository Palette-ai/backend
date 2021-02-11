"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishRatingMutation = exports.DishRatingQuery = undefined;

var _DishRating = require("../models/DishRating");

const DishRatingQuery = {
  dishRatingById: _DishRating.DishRatingTC.getResolver('findById'),
  dishRatingByIds: _DishRating.DishRatingTC.getResolver('findByIds'),
  dishRatingOne: _DishRating.DishRatingTC.getResolver('findOne'),
  dishRatingMany: _DishRating.DishRatingTC.getResolver('findMany'),
  dishRatingCount: _DishRating.DishRatingTC.getResolver('count'),
  dishRatingConnection: _DishRating.DishRatingTC.getResolver('connection'),
  dishRatingPagination: _DishRating.DishRatingTC.getResolver('pagination')
};
const DishRatingMutation = {
  dishRatingCreateOne: _DishRating.DishRatingTC.getResolver('createOne'),
  dishRatingCreateMany: _DishRating.DishRatingTC.getResolver('createMany'),
  dishRatingUpdateById: _DishRating.DishRatingTC.getResolver('updateById'),
  dishRatingUpdateOne: _DishRating.DishRatingTC.getResolver('updateOne'),
  dishRatingUpdateMany: _DishRating.DishRatingTC.getResolver('updateMany'),
  dishRatingRemoveById: _DishRating.DishRatingTC.getResolver('removeById'),
  dishRatingRemoveOne: _DishRating.DishRatingTC.getResolver('removeOne'),
  dishRatingRemoveMany: _DishRating.DishRatingTC.getResolver('removeMany')
};
exports.DishRatingQuery = DishRatingQuery;
exports.DishRatingMutation = DishRatingMutation;