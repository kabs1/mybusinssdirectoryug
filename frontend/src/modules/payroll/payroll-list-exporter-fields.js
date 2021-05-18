import { PayrollModel } from '@/modules/payroll/payroll-model';

const { fields } = PayrollModel;

export default [
  fields.id,
  fields.payrollRef,
  fields.payrollStaff,
  fields.payrollSalary,
  fields.payrollWorkingType,
  fields.payrollWorkingTime,
  fields.payrollStatus,
  fields.payrollDate,
  fields.createdAt
];
