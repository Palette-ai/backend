import { Restaurant, RestaurantTC } from '../models/restaurant.js';

const RestaurantQuery = {
  restaurantById: RestaurantTC.mongooseResolvers.findById(),
  restaurantByIds: RestaurantTC.mongooseResolvers.findByIds(),
  restaurantOne: RestaurantTC.mongooseResolvers.findOne(),
  restaurantMany: RestaurantTC.mongooseResolvers.findMany({
    filter: {
      operators: true,
    }
  }),
  restaurantCount: RestaurantTC.mongooseResolvers.count(),
  restaurantConnection: RestaurantTC.mongooseResolvers.connection(),
  restaurantPagination: RestaurantTC.mongooseResolvers.pagination(),
};

const RestaurantMutation = {
  restaurantCreateOne: RestaurantTC.mongooseResolvers.createOne(),
  restaurantCreateMany: RestaurantTC.mongooseResolvers.createMany(),
  restaurantUpdateById: RestaurantTC.mongooseResolvers.updateById(),
  restaurantUpdateOne: RestaurantTC.mongooseResolvers.updateOne(),
  restaurantUpdateMany: RestaurantTC.mongooseResolvers.updateMany(),
  restaurantRemoveById: RestaurantTC.mongooseResolvers.removeById(),
  restaurantRemoveOne: RestaurantTC.mongooseResolvers.removeOne(),
  restaurantRemoveMany: RestaurantTC.mongooseResolvers.removeMany(),
};

export { RestaurantQuery, RestaurantMutation };
