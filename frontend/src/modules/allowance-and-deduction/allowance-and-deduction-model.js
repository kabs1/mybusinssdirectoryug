import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { StaffField } from '@/modules/staff/staff-field';
import { StallField } from '@/modules/stall/stall-field';
import { DamagesField } from '@/modules/damages/damages-field';
import { CommissionsField } from '@/modules/commissions/commissions-field';
import { ExpensesField } from '@/modules/expenses/expenses-field';

function label(name) {
  return i18n(`entities.allowanceAndDeduction.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.allowanceAndDeduction.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  adRef: new StringField('adRef', label('adRef'), {
    "required": true,
    "max": 15,
    "min": 3
  }),
  adType: new EnumeratorField('adType', label('adType'), [
    { id: 'Allowance', label: enumeratorLabel('adType', 'Allowance') },
    { id: 'Deduction', label: enumeratorLabel('adType', 'Deduction') },
  ],{
    "required": true
  }),
  adStaff: StaffField.relationToOne('adStaff', label('adStaff'), {
    "required": true
  }),
  adAmmount: new DecimalField('adAmmount', label('adAmmount'), {
    "required": true
  }),
  adStall: StallField.relationToOne('adStall', label('adStall'), {
    "required": true
  }),
  adDate: new DateField('adDate', label('adDate'), {
    "required": true
  }),
  adNote: new StringField('adNote', label('adNote'), {
    "required": true
  }),
  adDamages: DamagesField.relationToMany('adDamages', label('adDamages'), {}),
  adCommissions: CommissionsField.relationToMany('adCommissions', label('adCommissions'), {}),
  adExpenses: ExpensesField.relationToMany('adExpenses', label('adExpenses'), {}),
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
  adAmmountRange: new DecimalRangeField(
    'adAmmountRange',
    label('adAmmountRange'),
  ),
  adDateRange: new DateRangeField(
    'adDateRange',
    label('adDateRange'),
  ),
};

export class AllowanceAndDeductionModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
