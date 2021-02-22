import { Dish, DishTC } from '../models/dish.js';

const DishQuery = {
  dishById: DishTC.getResolver('findById'),
  dishByIds: DishTC.getResolver('findByIds'),
  dishOne: DishTC.getResolver('findOne'),
  dishMany: DishTC.getResolver('findMany'),
  dishCount: DishTC.getResolver('count'),
  dishConnection: DishTC.getResolver('connection'),
  dishPagination: DishTC.getResolver('pagination'),
};

const DishMutation = {
  dishCreateOne: DishTC.getResolver('createOne'),
  dishCreateMany: DishTC.getResolver('createMany'),
  dishUpdateById: DishTC.getResolver('updateById'),
  dishUpdateOne: DishTC.getResolver('updateOne'),
  dishUpdateMany: DishTC.getResolver('updateMany'),
  dishRemoveById: DishTC.getResolver('removeById'),
  dishRemoveOne: DishTC.getResolver('removeOne'),
  dishRemoveMany: DishTC.getResolver('removeMany'),

  // append elements to arrays
  dishAddFeature: {
    type: DishTC,
    args: { dish_id: 'String!', feature_id: 'Int!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const dish = await Dish.update(
        { _id: args.dish_id },
        { $addToSet: { features: args.feature_id } }
      );
      if (!dish) return null; // or gracefully return an error etc...
      return Dish.findOne({ _id: args.dish_id }); // return the record
    },
  },
  dishAddTag: {
    type: DishTC,
    args: { dish_id: 'String!', tag_id: 'Int!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const dish = await Dish.update(
        { _id: args.dish_id },
        { $addToSet: { tags: args.tag_id } }
      );
      if (!dish) return null; // or gracefully return an error etc...
      return Dish.findOne({ _id: args.dish_id }); // return the record
    },
  },
  dishAddRating: {
    type: DishTC,
    args: { dish_id: 'String!', rating_id: 'String!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const dish = await Dish.update(
        { _id: args.dish_id },
        { $addToSet: { rating_ids: args.rating_id } }
      );
      if (!dish) return null; // or gracefully return an error etc...
      return Dish.findOne({ _id: args.dish_id }); // return the record
    },
  },
};

export { DishQuery, DishMutation };
