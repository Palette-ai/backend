import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import * as pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;

export const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  phone_number: {
    type: String,
    required: true,
  },
  plus_code: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  }
});

// adds 'createdAt' and 'updatedAt' fields
RestaurantSchema.plugin(timestamps);

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export const RestaurantTC = composeMongoose(Restaurant);
