import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import * as pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;
import { UserTC } from './user.js';
import { DishTC } from './dish.js';

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
  upvotes: {
    type: Number,
    default: 0,
  },
});
DishRatingSchema.plugin(timestamps);

const DishRating = mongoose.model('DishRating', DishRatingSchema);
const DishRatingTC = composeMongoose(DishRating);

DishRatingTC.addRelation('user', {
  resolver: () => UserTC.mongooseResolvers.findById({ lean: true }),
  prepareArgs: {
    _id: (s) => mongoose.Types.ObjectId(s.user_id),
  },
  projection: { user_id: true },
});

DishRatingTC.addRelation('dish', {
  resolver: () => DishTC.mongooseResolvers.findById({ lean: true }),
  prepareArgs: {
    _id: (s) => mongoose.Types.ObjectId(s.dish_id),
  },
  projection: { dish_id: true },
});

export { DishRating, DishRatingTC };
