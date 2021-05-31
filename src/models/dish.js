import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import * as pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;
import { RestaurantTC } from './restaurant.js';

export const DishSchema = new Schema({
  dish_name: {
    type: String,
    trim: true,
    required: true,
  },
  restaurant_id: {
    type: String,
    required: true,
  },
  average_rating: {
    type: Number,
  },
  features: {
    type: [Number],
  },
  description: {
    type: String,
  },
  tags: {
    type: [Number],
  },
  price: {
    type: Number,
  },
  img: {
    type: String,
  },
});

// adds 'createdAt' and 'updatedAt' fields
DishSchema.plugin(timestamps);

const Dish = mongoose.model('Dish', DishSchema);
const DishTC = composeMongoose(Dish);

DishTC.addRelation('restaurant', {
  resolver: () => RestaurantTC.mongooseResolvers.findById({ lean: true }),
  prepareArgs: {
    _id: (s) => mongoose.Types.ObjectId(s.restaurant_id),
  },
  projection: { restaurant_id: true },
});

export { Dish, DishTC };
