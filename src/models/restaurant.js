import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const RestaurantSchema = new Schema({
  owner_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});
RestaurantSchema.plugin(timestamps);

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export const RestaurantTC = composeWithMongoose(Restaurant);
