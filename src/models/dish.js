import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

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
});
DishSchema.plugin(timestamps);

export const Dish = mongoose.model('Dish', DishSchema);
export const DishTC = composeWithMongoose(Dish);
