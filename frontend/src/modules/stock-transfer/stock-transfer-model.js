import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { ProductsField } from '@/modules/products/products-field';
import { StallField } from '@/modules/stall/stall-field';
import { ExpensesField } from '@/modules/expenses/expenses-field';

function label(name) {
  return i18n(`entities.stockTransfer.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.stockTransfer.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  transferRef: new StringField('transferRef', label('transferRef'), {
    "required": true,
    "max": 15,
    "min": 5
  }),
  transferProduct: ProductsField.relationToOne('transferProduct', label('transferProduct'), {
    "required": true
  }),
  transferStallFrom: StallField.relationToOne('transferStallFrom', label('transferStallFrom'), {
    "required": true
  }),
  transferStallTo: StallField.relationToOne('transferStallTo', label('transferStallTo'), {
    "required": true
  }),
  transferUnits: new DecimalField('transferUnits', label('transferUnits'), {
    "required": true
  }),
  transferNote: new StringField('transferNote', label('transferNote'), {}),
  transferStatus: new EnumeratorField('transferStatus', label('transferStatus'), [
    { id: 'Done', label: enumeratorLabel('transferStatus', 'Done') },
    { id: 'Pending', label: enumeratorLabel('transferStatus', 'Pending') },
    { id: 'Active', label: enumeratorLabel('transferStatus', 'Active') },
  ],{
    "required": true
  }),
  transferExpenses: ExpensesField.relationToMany('transferExpenses', label('transferExpenses'), {}),
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
  transferUnitsRange: new DecimalRangeField(
    'transferUnitsRange',
    label('transferUnitsRange'),
  ),
};

export class StockTransferModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
