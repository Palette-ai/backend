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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = exports.UserSchema = new _mongoose.Schema({
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

const UserTC = exports.UserTC = (0, _graphqlComposeMongoose.composeWithMongoose)(User);