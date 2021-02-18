import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const MenuSchema = new Schema({
  restaurant_id: {
    type: String,
    required: true,
  },
  dish_ids: {
    type: [String],
    required: true,
  },
});
MenuSchema.plugin(timestamps);

export const Menu = mongoose.model('Menu', MenuSchema);
export const MenuTC = composeWithMongoose(Menu);
