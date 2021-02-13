import { Owner, OwnerTC } from '../models/owner.js';

const OwnerQuery = {
  ownerById: OwnerTC.getResolver('findById'),
  ownerByIds: OwnerTC.getResolver('findByIds'),
  ownerOne: OwnerTC.getResolver('findOne'),
  ownerMany: OwnerTC.getResolver('findMany'),
  ownerCount: OwnerTC.getResolver('count'),
  ownerConnection: OwnerTC.getResolver('connection'),
  ownerPagination: OwnerTC.getResolver('pagination'),
};

const OwnerMutation = {
  ownerCreateOne: OwnerTC.getResolver('createOne'),
  ownerCreateMany: OwnerTC.getResolver('createMany'),
  ownerUpdateById: OwnerTC.getResolver('updateById'),
  ownerUpdateOne: OwnerTC.getResolver('updateOne'),
  ownerUpdateMany: OwnerTC.getResolver('updateMany'),
  ownerRemoveById: OwnerTC.getResolver('removeById'),
  ownerRemoveOne: OwnerTC.getResolver('removeOne'),
  ownerRemoveMany: OwnerTC.getResolver('removeMany'),
};

export { OwnerQuery, OwnerMutation };
