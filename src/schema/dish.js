import { Dish, DishTC } from '../models/Dish.js';

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
};

export { DishQuery, DishMutation };
