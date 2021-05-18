import { ReturnsModel } from '@/modules/returns/returns-model';

const { fields } = ReturnsModel;

export default [
  fields.returnRefNo,
  fields.returnProduct,
  fields.returnUnits,
  fields.returnReason,
  fields.returnsFrom,
  fields.returnIdentifier,
  fields.returnStall,
];
