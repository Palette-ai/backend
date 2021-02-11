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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OwnerSchema = exports.OwnerSchema = new _mongoose.Schema({
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

const OwnerTC = exports.OwnerTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Owner);