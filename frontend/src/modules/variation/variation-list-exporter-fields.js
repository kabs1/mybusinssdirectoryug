import { VariationModel } from '@/modules/variation/variation-model';

const { fields } = VariationModel;

export default [
  fields.id,
  fields.variationName,
  fields.variationValues,
  fields.createdAt
];
