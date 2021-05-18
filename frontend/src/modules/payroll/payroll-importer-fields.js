import { PayrollModel } from '@/modules/payroll/payroll-model';

const { fields } = PayrollModel;

export default [
  fields.payrollRef,
  fields.payrollStaff,
  fields.payrollSalary,
  fields.payrollAd,
  fields.payrollDocs,
  fields.payrollWorkingType,
  fields.payrollWorkingTime,
  fields.payrollStatus,
  fields.payrollDate,
];
