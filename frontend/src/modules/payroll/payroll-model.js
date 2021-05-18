import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { StaffField } from '@/modules/staff/staff-field';
import { AllowanceAndDeductionField } from '@/modules/allowance-and-deduction/allowance-and-deduction-field';
import FilesField from '@/shared/fields/files-field';

function label(name) {
  return i18n(`entities.payroll.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.payroll.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  payrollRef: new StringField('payrollRef', label('payrollRef'), {
    "required": true,
    "max": 15,
    "min": 3
  }),
  payrollStaff: StaffField.relationToOne('payrollStaff', label('payrollStaff'), {
    "required": true
  }),
  payrollSalary: new DecimalField('payrollSalary', label('payrollSalary'), {
    "required": true
  }),
  payrollAd: AllowanceAndDeductionField.relationToMany('payrollAd', label('payrollAd'), {}),
  payrollDocs: new FilesField('payrollDocs', label('payrollDocs'), 'payroll/payrollDocs',{}),
  payrollWorkingType: new EnumeratorField('payrollWorkingType', label('payrollWorkingType'), [
    { id: 'Days', label: enumeratorLabel('payrollWorkingType', 'Days') },
    { id: 'Hours', label: enumeratorLabel('payrollWorkingType', 'Hours') },
    { id: 'Weeks', label: enumeratorLabel('payrollWorkingType', 'Weeks') },
    { id: 'Months', label: enumeratorLabel('payrollWorkingType', 'Months') },
  ],{
    "required": true
  }),
  payrollWorkingTime: new IntegerField('payrollWorkingTime', label('payrollWorkingTime'), {
    "required": true
  }),
  payrollStatus: new EnumeratorField('payrollStatus', label('payrollStatus'), [
    { id: 'Pending', label: enumeratorLabel('payrollStatus', 'Pending') },
    { id: 'Completed', label: enumeratorLabel('payrollStatus', 'Completed') },
  ],{
    "required": true
  }),
  payrollDate: new DateField('payrollDate', label('payrollDate'), {
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  payrollSalaryRange: new DecimalRangeField(
    'payrollSalaryRange',
    label('payrollSalaryRange'),
  ),
  payrollWorkingTimeRange: new IntegerRangeField(
    'payrollWorkingTimeRange',
    label('payrollWorkingTimeRange'),
  ),
  payrollDateRange: new DateRangeField(
    'payrollDateRange',
    label('payrollDateRange'),
  ),
};

export class PayrollModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
