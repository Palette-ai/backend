/* eslint-disable no-unused-vars */
import { DishRating, DishRatingTC } from '../models/dishrating.js';

const DishRatingQuery = {
  dishRatingById: DishRatingTC.getResolver('findById'),
  dishRatingByIds: DishRatingTC.getResolver('findByIds'),
  dishRatingOne: DishRatingTC.getResolver('findOne'),
  dishRatingMany: DishRatingTC.getResolver('findMany')
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
