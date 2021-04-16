import { Dictionary, DictionaryTC } from '../models/dictionary.js';

const DictionaryQuery = {
  dictionaryById: DictionaryTC.mongooseResolvers.findById(),
  dictionaryByIds: DictionaryTC.mongooseResolvers.findByIds(),
  dictionaryOne: DictionaryTC.mongooseResolvers.findOne(),
  dictionaryCount: DictionaryTC.mongooseResolvers.count(),
  dictionaryConnection: DictionaryTC.mongooseResolvers.connection(),
  dictionaryPagination: DictionaryTC.mongooseResolvers.pagination(),
};

const DictionaryMutation = {
  dictionaryCreateOne: DictionaryTC.mongooseResolvers.createOne(),
  dictionaryUpdateById: DictionaryTC.mongooseResolvers.updateById(),
  dictionaryUpdateOne: DictionaryTC.mongooseResolvers.updateOne(),
  dictionaryRemoveById: DictionaryTC.mongooseResolvers.removeById(),
  dictionaryRemoveOne: DictionaryTC.mongooseResolvers.removeOne(),

  // append elements to arrays
  dictionaryAddFeature: {
    type: DictionaryTC,
    args: { dict_id: 'String!', key: 'Int!', val: "String!" },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const dict = await Dictionary.update(
        { _id: args.dict_id },
        { $addToSet: { features: {key: args.key, val: args.val }  }}
      );
      if (!dict) return null; // or gracefully return an error etc...
      return Dictionary.findOne({ _id: args.dict_id }); // return the record
    },
  },
  dictionaryAddTag: {
    type: DictionaryTC,
    args: { dict_id: 'String!', key: 'Int!', val: "String!" },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const dict = await Dictionary.update(
        { _id: args.dict_id },
        { $addToSet: { tags: {key: args.key, val: args.val }  }}
      );
      if (!dict) return null; // or gracefully return an error etc...
      return Dictionary.findOne({ _id: args.dict_id }); // return the record
    },
  },
};

export { DictionaryQuery, DictionaryMutation };
