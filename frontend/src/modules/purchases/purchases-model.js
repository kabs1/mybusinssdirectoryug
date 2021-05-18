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
import { ProductsField } from '@/modules/products/products-field';
import { SuppliersField } from '@/modules/suppliers/suppliers-field';
import { StallField } from '@/modules/stall/stall-field';

function label(name) {
  return i18n(`entities.purchases.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.purchases.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  purchasesRef: new StringField('purchasesRef', label('purchasesRef'), {
    "required": true,
    "max": 10
  }),
  purchaseProduct: ProductsField.relationToOne('purchaseProduct', label('purchaseProduct'), {
    "required": true
  }),
  purchaseSupplier: SuppliersField.relationToOne('purchaseSupplier', label('purchaseSupplier'), {
    "required": true
  }),
  purchasePaymentStatus: new EnumeratorField('purchasePaymentStatus', label('purchasePaymentStatus'), [
    { id: 'paid', label: enumeratorLabel('purchasePaymentStatus', 'paid') },
    { id: 'pending', label: enumeratorLabel('purchasePaymentStatus', 'pending') },
  ],{
    "required": true
  }),
  purchaseUnits: new IntegerField('purchaseUnits', label('purchaseUnits'), {
    "required": true
  }),
  purchaseTotalAmount: new DecimalField('purchaseTotalAmount', label('purchaseTotalAmount'), {}),
  purchaseReturnsUnits: new IntegerField('purchaseReturnsUnits', label('purchaseReturnsUnits'), {
    "required": true
  }),
  purchaseNote: new StringField('purchaseNote', label('purchaseNote'), {
    "max": 250
  }),
  purchaseStall: StallField.relationToOne('purchaseStall', label('purchaseStall'), {
    "required": true
  }),
  purchaseReturnsReason: new StringField('purchaseReturnsReason', label('purchaseReturnsReason'), {}),
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
  purchaseUnitsRange: new IntegerRangeField(
    'purchaseUnitsRange',
    label('purchaseUnitsRange'),
  ),
  purchaseTotalAmountRange: new DecimalRangeField(
    'purchaseTotalAmountRange',
    label('purchaseTotalAmountRange'),
  ),
  purchaseReturnsUnitsRange: new IntegerRangeField(
    'purchaseReturnsUnitsRange',
    label('purchaseReturnsUnitsRange'),
  ),
};

export class PurchasesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
