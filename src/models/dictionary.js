import mongoose from 'mongoose';
const { Schema } = mongoose;
import timestamps from 'mongoose-timestamp';
import pkg from 'graphql-compose-mongoose';
const { composeMongoose } = pkg;

export const DictionarySchema = new Schema({
  features: [{
    key: {
      type: Number,
      required: true,
    },
    val: {
      type: String,
      required: true,
    },
  }],
  tags: [{
    key: {
      type: Number,
      required: true,
    },
    val: {
      type: String,
      required: true,
    },
  }],
});
DictionarySchema.plugin(timestamps);

export const Dictionary = mongoose.model('Dictionary', DictionarySchema);
export const DictionaryTC = composeMongoose(Dictionary);
