import { ExpenseCategoryModel } from '@/modules/expense-category/expense-category-model';

const { fields } = ExpenseCategoryModel;

export default [
  fields.id,
  fields.expCategoryTitle,
  fields.expCategoryDetails,
  fields.createdAt
];
