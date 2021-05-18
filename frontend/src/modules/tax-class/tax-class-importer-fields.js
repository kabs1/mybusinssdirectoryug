import { TaxClassModel } from '@/modules/tax-class/tax-class-model';

const { fields } = TaxClassModel;

export default [
  fields.taxClassName,
  fields.taxClassPercentage,
  fields.taxClassDetails,
];
