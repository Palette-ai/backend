"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OwnerTC = exports.Owner = exports.OwnerSchema = undefined;

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
const OwnerSchema = exports.OwnerSchema = new Schema({
  restaurant_id: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  review: {
    type: String,
    trim: true
  }
});
OwnerSchema.plugin(_mongooseTimestamp2.default);

const Owner = exports.Owner = _mongoose2.default.model('Owner', OwnerSchema);

const OwnerTC = exports.OwnerTC = composeWithMongoose(Owner);