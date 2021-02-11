import { DishRating, DishRatingTC } from '../models/DishRating.js';

const DishRatingQuery = {
  dishRatingById: DishRatingTC.getResolver('findById'),
  dishRatingByIds: DishRatingTC.getResolver('findByIds'),
  dishRatingOne: DishRatingTC.getResolver('findOne'),
  dishRatingMany: DishRatingTC.getResolver('findMany'),
  dishRatingCount: DishRatingTC.getResolver('count'),
  dishRatingConnection: DishRatingTC.getResolver('connection'),
  dishRatingPagination: DishRatingTC.getResolver('pagination'),
};

const DishRatingMutation = {
  dishRatingCreateOne: DishRatingTC.getResolver('createOne'),
  dishRatingCreateMany: DishRatingTC.getResolver('createMany'),
  dishRatingUpdateById: DishRatingTC.getResolver('updateById'),
  dishRatingUpdateOne: DishRatingTC.getResolver('updateOne'),
  dishRatingUpdateMany: DishRatingTC.getResolver('updateMany'),
  dishRatingRemoveById: DishRatingTC.getResolver('removeById'),
  dishRatingRemoveOne: DishRatingTC.getResolver('removeOne'),
  dishRatingRemoveMany: DishRatingTC.getResolver('removeMany'),
};

export { DishRatingQuery, DishRatingMutation };
