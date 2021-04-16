import { Owner, OwnerTC } from '../models/owner.js';

const OwnerQuery = {
  ownerById: OwnerTC.mongooseResolvers.findById(),
  ownerByIds: OwnerTC.mongooseResolvers.findByIds(),
  ownerOne: OwnerTC.mongooseResolvers.findOne(),
  ownerMany: OwnerTC.mongooseResolvers.findMany(),
  ownerCount: OwnerTC.mongooseResolvers.count(),
  ownerConnection: OwnerTC.mongooseResolvers.connection(),
  ownerPagination: OwnerTC.mongooseResolvers.pagination(),
};

const OwnerMutation = {
  ownerCreateOne: OwnerTC.mongooseResolvers.createOne(),
  ownerCreateMany: OwnerTC.mongooseResolvers.createMany(),
  ownerUpdateById: OwnerTC.mongooseResolvers.updateById(),
  ownerUpdateOne: OwnerTC.mongooseResolvers.updateOne(),
  ownerUpdateMany: OwnerTC.mongooseResolvers.updateMany(),
  ownerRemoveById: OwnerTC.mongooseResolvers.removeById(),
  ownerRemoveOne: OwnerTC.mongooseResolvers.removeOne(),
  ownerRemoveMany: OwnerTC.mongooseResolvers.removeMany(),
};

export { OwnerQuery, OwnerMutation };
