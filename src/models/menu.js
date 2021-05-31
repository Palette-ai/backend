import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import * as pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;

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

// adds 'createdAt' and 'updatedAt' fields
MenuSchema.plugin(timestamps);

export const Menu = mongoose.model('Menu', MenuSchema);
export const MenuTC = composeMongoose(Menu);
