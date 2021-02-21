import { Dictionary, DictionaryTC } from '../models/Dictionary.js';

const DictionaryQuery = {
  dictionaryById: DictionaryTC.getResolver('findById'),
  dictionaryByIds: DictionaryTC.getResolver('findByIds'),
  dictionaryOne: DictionaryTC.getResolver('findOne'),
  dictionaryCount: DictionaryTC.getResolver('count'),
  dictionaryConnection: DictionaryTC.getResolver('connection'),
  dictionaryPagination: DictionaryTC.getResolver('pagination'),
};

const DictionaryMutation = {
  dictionaryCreateOne: DictionaryTC.getResolver('createOne'),
  dictionaryUpdateById: DictionaryTC.getResolver('updateById'),
  dictionaryUpdateOne: DictionaryTC.getResolver('updateOne'),
  dictionaryRemoveById: DictionaryTC.getResolver('removeById'),
  dictionaryRemoveOne: DictionaryTC.getResolver('removeOne'),

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
