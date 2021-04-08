import { User, UserTC } from '../models/user.js';

const UserQuery = {
  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination'),
};

const UserMutation = {
  userCreateOne: UserTC.getResolver('createOne'),
  userCreateMany: UserTC.getResolver('createMany'),
  userUpdateById: UserTC.getResolver('updateById'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  userUpdateMany: UserTC.getResolver('updateMany'),
  userRemoveById: UserTC.getResolver('removeById'),
  userRemoveOne: UserTC.getResolver('removeOne'),
  userRemoveMany: UserTC.getResolver('removeMany'),

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
