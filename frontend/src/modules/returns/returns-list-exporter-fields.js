import { ReturnsModel } from '@/modules/returns/returns-model';

const { fields } = ReturnsModel;

export default [
  fields.id,
  fields.returnRefNo,
  fields.returnProduct,
  fields.returnUnits,
  fields.returnsFrom,
  fields.returnIdentifier,
  fields.returnStall,
  fields.createdAt
];
