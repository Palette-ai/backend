import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const DishRatingSchema = new Schema({
  dish_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    trim: true,
  },
});
DishRatingSchema.plugin(timestamps);

export const DishRating = mongoose.model('DishRating', DishRatingSchema);
export const DishRatingTC = composeWithMongoose(DishRating);
