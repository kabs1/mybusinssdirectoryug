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

function label(name) {
  return i18n(`entities.returns.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.returns.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  returnRefNo: new StringField('returnRefNo', label('returnRefNo'), {
    "required": true,
    "max": 15
  }),
  returnProduct: ProductsField.relationToOne('returnProduct', label('returnProduct'), {
    "required": true
  }),
  returnUnits: new DecimalField('returnUnits', label('returnUnits'), {
    "required": true
  }),
  returnReason: new StringField('returnReason', label('returnReason'), {}),
  returnsFrom: new EnumeratorField('returnsFrom', label('returnsFrom'), [
    { id: 'purchase', label: enumeratorLabel('returnsFrom', 'purchase') },
    { id: 'sale', label: enumeratorLabel('returnsFrom', 'sale') },
  ],{
    "required": true
  }),
  returnIdentifier: new StringField('returnIdentifier', label('returnIdentifier'), {
    "required": true
  }),
  returnStall: StallField.relationToOne('returnStall', label('returnStall'), {
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
  returnUnitsRange: new DecimalRangeField(
    'returnUnitsRange',
    label('returnUnitsRange'),
  ),
};

export class ReturnsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
