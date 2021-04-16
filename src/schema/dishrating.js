/* eslint-disable no-unused-vars */
import { DishRating, DishRatingTC } from '../models/dishrating.js';

const DishRatingQuery = {
  dishRatingById: DishRatingTC.mongooseResolvers.findById(),
  dishRatingByIds: DishRatingTC.mongooseResolvers.findById(),
  dishRatingOne: DishRatingTC.mongooseResolvers.findOne(),
  dishRatingMany: DishRatingTC.mongooseResolvers.findMany()
                              .addFilterArg({
                                name: 'hasReviewText',
                                type: 'Boolean', // also can be 'Int Float Boolean ID String! [String] AnyNamedType' 
                                description: 'Search by regExp',
                                query: (rawQuery, value, resolveParams) => {
                                  if (value) {
                                    // eslint-disable-next-line no-useless-escape
                                    rawQuery.review = new RegExp("^(?!\s*$).+");
                                  }
                                  else {
                                    // eslint-disable-next-line no-useless-escape
                                    rawQuery.review = new RegExp("^$");
                                  }
                                },
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
