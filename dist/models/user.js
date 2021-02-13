"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTC = exports.User = exports.UserSchema = undefined;

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
const UserSchema = exports.UserSchema = new Schema({
  dateOfBirth: {
    type: Date
  },
  name: {
    type: String
  },
  location: {
    type: String
  }
});
UserSchema.plugin(_mongooseTimestamp2.default);

const User = exports.User = _mongoose2.default.model('User', UserSchema);

const UserTC = exports.UserTC = composeWithMongoose(User);