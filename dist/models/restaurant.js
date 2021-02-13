"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantTC = exports.Restaurant = exports.RestaurantSchema = undefined;

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
const RestaurantSchema = exports.RestaurantSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  menu: {
    type: Schema.Types.ObjectID,
    ref: 'Menu',
    required: true
  },
  location: {
    type: String
  }
});
RestaurantSchema.plugin(_mongooseTimestamp2.default);

const Restaurant = exports.Restaurant = _mongoose2.default.model('Restaurant', RestaurantSchema);

const RestaurantTC = exports.RestaurantTC = composeWithMongoose(Restaurant);