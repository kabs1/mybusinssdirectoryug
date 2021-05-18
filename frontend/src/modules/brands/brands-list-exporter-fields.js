import { BrandsModel } from '@/modules/brands/brands-model';

const { fields } = BrandsModel;

export default [
  fields.id,
  fields.brandTitle,
  fields.brandDetails,
  fields.createdAt
];
