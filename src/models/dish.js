import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
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
    // required: true, can make required later
  },
  description: {
    type: String,
  },
  tags: {
    type: [Number],
    // required: true,
  },
  price: {
    type: Number,
  },
});
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
