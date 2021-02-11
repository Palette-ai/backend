"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const users = [{
  username: 'AdminUser',
  email: 'admin@example.com',
  password: _bcryptjs2.default.hashSync('123456', 10),
  // hashes passwprd syncronously, first param is demo 'user input' password, second is the amount of rounds of hasing
  isAdmin: true
}, {
  username: 'JohnDoe',
  email: 'JohnDoe@example.com',
  password: _bcryptjs2.default.hashSync('123456', 10),
  isAdmin: true
}, {
  username: 'JaneDoe',
  email: 'janeDoe@example.com',
  password: _bcryptjs2.default.hashSync('1', 10),
  isAdmin: true
}];
exports.default = users;