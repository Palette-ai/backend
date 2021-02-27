import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const RestaurantSchema = new Schema({
  restaurant_id_num: {
    type: Number,
    required: true
  },
  owner_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  date_added: {
    type: Date,
    required: true
  }
});
RestaurantSchema.plugin(timestamps);

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export const RestaurantTC = composeWithMongoose(Restaurant);
