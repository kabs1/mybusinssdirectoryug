import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { DeviceSessionsField } from '@/modules/device-sessions/device-sessions-field';

function label(name) {
  return i18n(`entities.transactions.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.transactions.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  transactionRef: new StringField('transactionRef', label('transactionRef'), {
    "required": true,
    "min": 3,
    "max": 15
  }),
  transactionClass: new EnumeratorField('transactionClass', label('transactionClass'), [
    { id: 'Purchase', label: enumeratorLabel('transactionClass', 'Purchase') },
    { id: 'Sales', label: enumeratorLabel('transactionClass', 'Sales') },
    { id: 'Customer', label: enumeratorLabel('transactionClass', 'Customer') },
    { id: 'Assets', label: enumeratorLabel('transactionClass', 'Assets') },
    { id: 'Expenses', label: enumeratorLabel('transactionClass', 'Expenses') },
    { id: 'Salary', label: enumeratorLabel('transactionClass', 'Salary') },
    { id: 'AD', label: enumeratorLabel('transactionClass', 'AD') },
  ],{
    "required": true
  }),
  transactionType: new EnumeratorField('transactionType', label('transactionType'), [
    { id: 'Debit', label: enumeratorLabel('transactionType', 'Debit') },
    { id: 'Credit', label: enumeratorLabel('transactionType', 'Credit') },
  ],{
    "required": true
  }),
  transactionValue: new DecimalField('transactionValue', label('transactionValue'), {
    "required": true
  }),
  transactionIdentifier: new StringField('transactionIdentifier', label('transactionIdentifier'), {
    "required": true
  }),
  transactionSession: DeviceSessionsField.relationToOne('transactionSession', label('transactionSession'), {
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
  transactionValueRange: new DecimalRangeField(
    'transactionValueRange',
    label('transactionValueRange'),
  ),
};

export class TransactionsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
