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
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.expenses.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.expenses.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  expenseCover: new ImagesField('expenseCover', label('expenseCover'), 'expenses/expenseCover',{
    "max": 1
  }),
  expensesTitle: new StringField('expensesTitle', label('expensesTitle'), {
    "required": true
  }),
  expensesCost: new DecimalField('expensesCost', label('expensesCost'), {
    "required": true
  }),
  expenseMadeTo: StaffField.relationToMany('expenseMadeTo', label('expenseMadeTo'), {
    "required": true
  }),
  expensesMadeBy: StaffField.relationToOne('expensesMadeBy', label('expensesMadeBy'), {
    "required": true
  }),
  expensesDate: new DateField('expensesDate', label('expensesDate'), {
    "required": true
  }),
  expensesStatus: new EnumeratorField('expensesStatus', label('expensesStatus'), [
    { id: 'completed', label: enumeratorLabel('expensesStatus', 'completed') },
    { id: 'pending', label: enumeratorLabel('expensesStatus', 'pending') },
  ],{
    "required": true
  }),
  expenseStall: StallField.relationToMany('expenseStall', label('expenseStall'), {
    "required": true
  }),
  expenseNote: new StringField('expenseNote', label('expenseNote'), {}),
  expenseDocs: new FilesField('expenseDocs', label('expenseDocs'), 'expenses/expenseDocs',{}),
  expenseDoc: new FilesField('expenseDoc', label('expenseDoc'), 'expenses/expenseDoc',{
    "max": 1
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
  expensesCostRange: new DecimalRangeField(
    'expensesCostRange',
    label('expensesCostRange'),
  ),
  expensesDateRange: new DateRangeField(
    'expensesDateRange',
    label('expensesDateRange'),
  ),
};

export class ExpensesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
