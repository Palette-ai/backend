import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;

export const OwnerSchema = new Schema({
  restaurant_id: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  review: {
    type: String,
    trim: true,
  },
});
OwnerSchema.plugin(timestamps);

export const Owner = mongoose.model('Owner', OwnerSchema);
export const OwnerTC = composeMongoose(Owner);
