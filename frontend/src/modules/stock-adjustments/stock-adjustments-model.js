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
import { StallField } from '@/modules/stall/stall-field';

function label(name) {
  return i18n(`entities.stockAdjustments.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.stockAdjustments.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  stockAdjustmentRef: new StringField('stockAdjustmentRef', label('stockAdjustmentRef'), {
    "required": true,
    "max": 15
  }),
  stockAdjustmentProduct: ProductsField.relationToOne('stockAdjustmentProduct', label('stockAdjustmentProduct'), {
    "required": true
  }),
  stockAdjustmentType: new EnumeratorField('stockAdjustmentType', label('stockAdjustmentType'), [
    { id: 'increase', label: enumeratorLabel('stockAdjustmentType', 'increase') },
    { id: 'decrease', label: enumeratorLabel('stockAdjustmentType', 'decrease') },
  ],{
    "required": true
  }),
  stockAdjustmentUnits: new IntegerField('stockAdjustmentUnits', label('stockAdjustmentUnits'), {
    "required": true
  }),
  adjustmentStall: StallField.relationToOne('adjustmentStall', label('adjustmentStall'), {
    "required": true
  }),
  stockAdjustmentsReason: new StringField('stockAdjustmentsReason', label('stockAdjustmentsReason'), {
    "max": 250
  }),
  stockAdjustmentClass: new EnumeratorField('stockAdjustmentClass', label('stockAdjustmentClass'), [
    { id: 'Normal', label: enumeratorLabel('stockAdjustmentClass', 'Normal') },
    { id: 'Abnomal', label: enumeratorLabel('stockAdjustmentClass', 'Abnomal') },
  ],{
    "required": true
  }),
  stockAdjustmentLoss: new DecimalField('stockAdjustmentLoss', label('stockAdjustmentLoss'), {
    "required": true
  }),
  stockAdjustmentRecorverdAmount: new DecimalField('stockAdjustmentRecorverdAmount', label('stockAdjustmentRecorverdAmount'), {
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
  stockAdjustmentUnitsRange: new IntegerRangeField(
    'stockAdjustmentUnitsRange',
    label('stockAdjustmentUnitsRange'),
  ),
  stockAdjustmentLossRange: new DecimalRangeField(
    'stockAdjustmentLossRange',
    label('stockAdjustmentLossRange'),
  ),
  stockAdjustmentRecorverdAmountRange: new DecimalRangeField(
    'stockAdjustmentRecorverdAmountRange',
    label('stockAdjustmentRecorverdAmountRange'),
  ),
};

export class StockAdjustmentsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
