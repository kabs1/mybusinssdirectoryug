import { AllowanceAndDeductionModel } from '@/modules/allowance-and-deduction/allowance-and-deduction-model';

const { fields } = AllowanceAndDeductionModel;

export default [
  fields.adRef,
  fields.adType,
  fields.adStaff,
  fields.adAmmount,
  fields.adStall,
  fields.adDate,
  fields.adNote,
  fields.adDamages,
  fields.adCommissions,
  fields.adExpenses,
];
