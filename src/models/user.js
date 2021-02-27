import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const UserSchema = new Schema({
  user_id_num: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  birthday: {
    type: Date,
    required: true
  },
  zipcode: {
    type: String,
  },
  email: {
    type: String,
  },
});
UserSchema.plugin(timestamps);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
