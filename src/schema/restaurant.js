import { Restaurant, RestaurantTC } from '../models/Restaurant.js';

const RestaurantQuery = {
  restaurantById: RestaurantTC.getResolver('findById'),
  restaurantByIds: RestaurantTC.getResolver('findByIds'),
  restaurantOne: RestaurantTC.getResolver('findOne'),
  restaurantMany: RestaurantTC.getResolver('findMany'),
  restaurantCount: RestaurantTC.getResolver('count'),
  restaurantConnection: RestaurantTC.getResolver('connection'),
  restaurantPagination: RestaurantTC.getResolver('pagination'),
};

const RestaurantMutation = {
  restaurantCreateOne: RestaurantTC.getResolver('createOne'),
  restaurantCreateMany: RestaurantTC.getResolver('createMany'),
  restaurantUpdateById: RestaurantTC.getResolver('updateById'),
  restaurantUpdateOne: RestaurantTC.getResolver('updateOne'),
  restaurantUpdateMany: RestaurantTC.getResolver('updateMany'),
  restaurantRemoveById: RestaurantTC.getResolver('removeById'),
  restaurantRemoveOne: RestaurantTC.getResolver('removeOne'),
  restaurantRemoveMany: RestaurantTC.getResolver('removeMany'),
};

export { RestaurantQuery, RestaurantMutation };
