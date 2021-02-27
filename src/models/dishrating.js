import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const DishRatingSchema = new Schema({
  rating_id_num: {
    type: Number,
    required: true,
    unique: true,
  },
  dish_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
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
