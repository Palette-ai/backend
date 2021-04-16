import { User, UserTC } from '../models/user.js';

const UserQuery = {
  userById: UserTC.mongooseResolvers.findById(),
  userByIds: UserTC.mongooseResolvers.findByIds(),
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userCount: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
};

const UserMutation = {
  userCreateOne: UserTC.mongooseResolvers.createOne(),
  userCreateMany: UserTC.mongooseResolvers.createMany(),
  userUpdateById: UserTC.mongooseResolvers.updateById(),
  userUpdateOne: UserTC.mongooseResolvers.updateOne(),
  userUpdateMany: UserTC.mongooseResolvers.updateMany(),
  userRemoveById: UserTC.mongooseResolvers.removeById(),
  userRemoveOne: UserTC.mongooseResolvers.removeOne(),
  userRemoveMany: UserTC.mongooseResolvers.removeMany(),

  userAddLikedDish: {
    type: UserTC,
    args: { user_id: 'String!', dish_id: 'String!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const user = await User.update(
        { _id: args.user_id },
        { $push: { liked_dishes: args.dish_id } }
      );
      if (!user) return null; // or gracefully return an error etc...
      return User.findOne({ _id: args.user_id }); // return the record
    },
  },
  userRemoveLikedDish: {
    type: UserTC,
    args: { user_id: 'String!', dish_id: 'String!' },
    // eslint-disable-next-line no-unused-vars
    resolve: async (source, args, context, info) => {
      const user = await User.update(
        { _id: args.user_id },
        { $pull: { liked_dishes: args.dish_id } }
      );
      if (!user) return null; // or gracefully return an error etc...
      return User.findOne({ _id: args.user_id }); // return the record
    },
  },
};

export { UserQuery, UserMutation };
