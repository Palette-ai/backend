import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const DishSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  restaurant_id: {
    type: String,
    required: true,
  },
  tags: {
    type: [Number],
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  ratings: {
    type: [Schema.Types.ObjectId],
    ref: 'DishRating',
  },
});
DishSchema.plugin(timestamps);

export const Dish = mongoose.model('Dish', DishSchema);
export const DishTC = composeWithMongoose(Dish);
