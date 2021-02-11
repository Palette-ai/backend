import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const UserSchema = new Schema({
  dateOfBirth: {
    type: Date,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
});
UserSchema.plugin(timestamps);

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
