"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _graphqlCompose2 = _interopRequireDefault(_graphqlCompose);

var _dish = require("./dish.js");

var _dishrating = require("./dishrating.js");

var _menu = require("./menu.js");

var _owner = require("./owner.js");

var _restaurant = require("./restaurant.js");

var _user = require("./user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  SchemaComposer
} = _graphqlCompose2.default; // import db from '../utils/db';

const schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields({ ..._dish.DishQuery,
  ..._dishrating.DishRatingQuery,
  ..._menu.MenuQuery,
  ..._owner.OwnerQuery,
  ..._restaurant.RestaurantQuery,
  ..._user.UserQuery
});
schemaComposer.Mutation.addFields({ ..._dish.DishMutation,
  ..._dishrating.DishRatingMutation,
  ..._menu.MenuMutation,
  ..._owner.OwnerMutation,
  ..._restaurant.RestaurantMutation,
  ..._user.UserMutation
});
const schema = schemaComposer.buildSchema();
exports.default = schema;