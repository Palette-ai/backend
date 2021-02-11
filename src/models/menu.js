import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeWithMongoose } = pkg;

export const MenuSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  dishes: {
    type: [Schema.Types.ObjectId],
    ref: 'Dish',
    required: true,
  },
});
MenuSchema.plugin(timestamps);

export const Menu = mongoose.model('Menu', MenuSchema);
export const MenuTC = composeWithMongoose(Menu);
