import { ProductCountModel } from '@/modules/product-count/product-count-model';

const { fields } = ProductCountModel;

export default [
  fields.id,
  fields.count,
  fields.createdAt
];
