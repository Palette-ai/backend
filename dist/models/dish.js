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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DishSchema = exports.DishSchema = new _mongoose.Schema({
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
    type: [_mongoose.Schema.Types.ObjectId],
    ref: 'DishRating'
  }
});
DishSchema.plugin(_mongooseTimestamp2.default);

const Dish = exports.Dish = _mongoose2.default.model('Dish', DishSchema);

const DishTC = exports.DishTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Dish);