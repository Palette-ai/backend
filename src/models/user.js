import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;
import { DishTC } from './dish.js';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  liked_dishes: {
    type: [String],
    required: true,
  },
  birthday: {
    type: Date,
    // required: true,
  },
  zipcode: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
  }
});

// automatically adds 'createdAt' and 'updatedAt' fields
UserSchema.plugin(timestamps);

const User = mongoose.model('User', UserSchema);
const UserTC = composeMongoose(User);

UserTC.addRelation('likes', {
  resolver: () => DishTC.mongooseResolvers.findByIds({ lean: true }),
  prepareArgs: {
    _ids: (s) => s.liked_dishes.map(ld => mongoose.Types.ObjectId(ld)),
  },
  projection: { liked_dishes: true },
});

export { User, UserTC };