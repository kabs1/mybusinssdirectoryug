import { CategoriesModel } from '@/modules/categories/categories-model';

const { fields } = CategoriesModel;

export default [
  fields.id,
  fields.categoryTitle,
  fields.categoryShortCode,
  fields.categoryDetails,
  fields.createdAt
];
