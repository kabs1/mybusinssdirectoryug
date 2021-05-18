import { CategoriesModel } from '@/modules/categories/categories-model';

const { fields } = CategoriesModel;

export default [
  fields.categoryCover,
  fields.categoryTitle,
  fields.categoryShortCode,
  fields.categoryDetails,
];
