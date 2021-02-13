import pkg from 'graphql-compose';
const { SchemaComposer } = pkg;

// import db from '../utils/db';

const schemaComposer = new SchemaComposer();

import { DishQuery, DishMutation } from './dish.js';
import { DishRatingQuery, DishRatingMutation } from './dishrating.js';
import { MenuQuery, MenuMutation } from './menu.js';
import { OwnerQuery, OwnerMutation } from './owner.js';
import { RestaurantQuery, RestaurantMutation } from './restaurant.js';
import { UserQuery, UserMutation } from './user.js';

schemaComposer.Query.addFields({
  ...DishQuery,
  ...DishRatingQuery,
  ...MenuQuery,
  ...OwnerQuery,
  ...RestaurantQuery,
  ...UserQuery,
});

schemaComposer.Mutation.addFields({
  ...DishMutation,
  ...DishRatingMutation,
  ...MenuMutation,
  ...OwnerMutation,
  ...RestaurantMutation,
  ...UserMutation,
});

const schema = schemaComposer.buildSchema();

export default schema;