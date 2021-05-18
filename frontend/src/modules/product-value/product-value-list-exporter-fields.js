import { ProductValueModel } from '@/modules/product-value/product-value-model';

const { fields } = ProductValueModel;

export default [
  fields.id,
  fields.value,
  fields.createdAt
];
