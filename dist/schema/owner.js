"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OwnerMutation = exports.OwnerQuery = undefined;

var _Owner = require("../models/Owner.js");

const OwnerQuery = {
  ownerById: _Owner.OwnerTC.getResolver('findById'),
  ownerByIds: _Owner.OwnerTC.getResolver('findByIds'),
  ownerOne: _Owner.OwnerTC.getResolver('findOne'),
  ownerMany: _Owner.OwnerTC.getResolver('findMany'),
  ownerCount: _Owner.OwnerTC.getResolver('count'),
  ownerConnection: _Owner.OwnerTC.getResolver('connection'),
  ownerPagination: _Owner.OwnerTC.getResolver('pagination')
};
const OwnerMutation = {
  ownerCreateOne: _Owner.OwnerTC.getResolver('createOne'),
  ownerCreateMany: _Owner.OwnerTC.getResolver('createMany'),
  ownerUpdateById: _Owner.OwnerTC.getResolver('updateById'),
  ownerUpdateOne: _Owner.OwnerTC.getResolver('updateOne'),
  ownerUpdateMany: _Owner.OwnerTC.getResolver('updateMany'),
  ownerRemoveById: _Owner.OwnerTC.getResolver('removeById'),
  ownerRemoveOne: _Owner.OwnerTC.getResolver('removeOne'),
  ownerRemoveMany: _Owner.OwnerTC.getResolver('removeMany')
};
exports.OwnerQuery = OwnerQuery;
exports.OwnerMutation = OwnerMutation;