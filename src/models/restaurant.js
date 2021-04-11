import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

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
});
RestaurantSchema.plugin(timestamps);

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export const RestaurantTC = composeWithMongoose(Restaurant);
