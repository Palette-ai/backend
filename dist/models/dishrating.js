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

var _graphqlComposeMongoose2 = _interopRequireDefault(_graphqlComposeMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose2.default;
const {
  composeWithMongoose
} = _graphqlComposeMongoose2.default;
const DishRatingSchema = exports.DishRatingSchema = new Schema({
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

const DishRatingTC = exports.DishRatingTC = composeWithMongoose(DishRating);