/* eslint-disable no-undef */
import pkg from 'graphql-compose';
const { SchemaComposer } = pkg;

// import db from '../utils/db';

const schemaComposer = new SchemaComposer();

import { DishQuery, DishMutation } from './dish.js';
import { DishRatingQuery, DishRatingMutation } from './dishrating.js';
import { RestaurantQuery, RestaurantMutation } from './restaurant.js';
import { UserQuery, UserMutation } from './user.js';

schemaComposer.Query.addFields({
  ...DishQuery,
  ...DishRatingQuery,
  ...RestaurantQuery,
  ...UserQuery,
});

schemaComposer.Mutation.addFields({
  ...DishMutation,
  ...DishRatingMutation,
  ...RestaurantMutation,
  ...UserMutation,
});

const schema = schemaComposer.buildSchema();

export default schema;
