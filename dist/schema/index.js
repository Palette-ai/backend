"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _dish = require("./dish");

var _dishrating = require("./dishrating");

var _menu = require("./menu");

var _owner = require("./owner");

var _restaurant = require("./restaurant");

var _user = require("./user");

// import db from '../utils/db';
const schemaComposer = new _graphqlCompose.SchemaComposer();
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