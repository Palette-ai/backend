"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantRatingTC = exports.RestaurantRating = exports.RestaurantSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RestaurantSchema = exports.RestaurantSchema = new _mongoose.Schema({
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  menu: {
    type: _mongoose.Schema.Types.ObjectID,
    ref: 'Menu',
    required: true
  },
  location: {
    type: String
  }
});
RestaurantSchema.plugin(_mongooseTimestamp2.default);

const RestaurantRating = exports.RestaurantRating = _mongoose2.default.model('RestaurantRating', RestaurantSchema);

const RestaurantRatingTC = exports.RestaurantRatingTC = (0, _graphqlComposeMongoose.composeWithMongoose)(RestaurantRating);