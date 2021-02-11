"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuTC = exports.Menu = exports.MenuSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MenuSchema = exports.MenuSchema = new _mongoose.Schema({
  restaurant: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  dishes: {
    type: [_mongoose.Schema.Types.ObjectId],
    ref: 'Dish',
    required: true
  }
});
MenuSchema.plugin(_mongooseTimestamp2.default);

const Menu = exports.Menu = _mongoose2.default.model('Menu', MenuSchema);

const MenuTC = exports.MenuTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Menu);