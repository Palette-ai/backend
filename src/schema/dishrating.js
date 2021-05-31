/* eslint-disable no-unused-vars */
import { DishRating, DishRatingTC } from '../models/dishrating.js';

const DishRatingQuery = {
  dishRatingById: DishRatingTC.mongooseResolvers.findById(),
  dishRatingByIds: DishRatingTC.mongooseResolvers.findById(),
  dishRatingOne: DishRatingTC.mongooseResolvers.findOne(),
  dishRatingMany: DishRatingTC.mongooseResolvers.findMany({
    filter: {
      operators: true,
    }
  }),
  dishRatingCount: DishRatingTC.mongooseResolvers.count(),
  dishRatingConnection: DishRatingTC.mongooseResolvers.connection(),
  dishRatingPagination: DishRatingTC.mongooseResolvers.pagination(),
};

const DishRatingMutation = {
  dishRatingCreateOne: DishRatingTC.mongooseResolvers.createOne(),
  dishRatingCreateMany: DishRatingTC.mongooseResolvers.createMany(),
  dishRatingUpdateById: DishRatingTC.mongooseResolvers.updateById(),
  dishRatingUpdateOne: DishRatingTC.mongooseResolvers.updateOne(),
  dishRatingUpdateMany: DishRatingTC.mongooseResolvers.updateMany(),
  dishRatingRemoveById: DishRatingTC.mongooseResolvers.removeById(),
  dishRatingRemoveOne: DishRatingTC.mongooseResolvers.removeOne(),
  dishRatingRemoveMany: DishRatingTC.mongooseResolvers.removeMany(),
};

export { DishRatingQuery, DishRatingMutation };
