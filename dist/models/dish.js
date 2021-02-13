"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishTC = exports.Dish = exports.DishSchema = undefined;

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
const DishSchema = exports.DishSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true
  },
  tags: {
    type: [Number],
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  ratings: {
    type: [Schema.Types.ObjectId],
    ref: 'DishRating'
  }
});
DishSchema.plugin(_mongooseTimestamp2.default);

const Dish = exports.Dish = _mongoose2.default.model('Dish', DishSchema);

const DishTC = exports.DishTC = composeWithMongoose(Dish);