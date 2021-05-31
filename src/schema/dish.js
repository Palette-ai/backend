import { Dish, DishTC } from '../models/dish.js';

const DishQuery = {
  dishById: DishTC.mongooseResolvers.findById(),
  dishByIds: DishTC.mongooseResolvers.findByIds(),
  dishOne: DishTC.mongooseResolvers.findOne(),
  dishMany: DishTC.mongooseResolvers.findMany({
    filter: {
      operators: true,
    }
  }),
  dishCount: DishTC.mongooseResolvers.count(),
  dishConnection: DishTC.mongooseResolvers.connection(),
  dishPagination: DishTC.mongooseResolvers.pagination(),
};

const DishMutation = {
  dishCreateOne: DishTC.mongooseResolvers.createOne(),
  dishCreateMany: DishTC.mongooseResolvers.createMany(),
  dishUpdateById: DishTC.mongooseResolvers.updateById(),
  dishUpdateOne: DishTC.mongooseResolvers.updateOne(),
  dishUpdateMany: DishTC.mongooseResolvers.updateMany(),
  dishRemoveById: DishTC.mongooseResolvers.removeById(),
  dishRemoveOne: DishTC.mongooseResolvers.removeOne(),
  dishRemoveMany: DishTC.mongooseResolvers.removeMany(),

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
      if (!dish) return null;
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
      if (!dish) return null;
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
      if (!dish) return null;
      return Dish.findOne({ _id: args.dish_id }); // return the record
    },
  },
};

export { DishQuery, DishMutation };
