"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishRatingTC = exports.DishRating = exports.DishRatingSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DishRatingSchema = exports.DishRatingSchema = new _mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  dish_id: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  review: {
    type: String,
    trim: true
  }
});
DishRatingSchema.plugin(_mongooseTimestamp2.default);

const DishRating = exports.DishRating = _mongoose2.default.model('DishRating', DishRatingSchema);

const DishRatingTC = exports.DishRatingTC = (0, _graphqlComposeMongoose.composeWithMongoose)(DishRating);