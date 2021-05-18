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
import { DeviceSessionsField } from '@/modules/device-sessions/device-sessions-field';

function label(name) {
  return i18n(`entities.priceChange.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.priceChange.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  priceChangeRef: new StringField('priceChangeRef', label('priceChangeRef'), {
    "required": true,
    "min": 3,
    "max": 15
  }),
  priceChangeType: new EnumeratorField('priceChangeType', label('priceChangeType'), [
    { id: 'Buying', label: enumeratorLabel('priceChangeType', 'Buying') },
    { id: 'Margin', label: enumeratorLabel('priceChangeType', 'Margin') },
  ],{
    "required": true
  }),
  priceChangeBefore: new DecimalField('priceChangeBefore', label('priceChangeBefore'), {
    "required": true
  }),
  priceChangeAfter: new DecimalField('priceChangeAfter', label('priceChangeAfter'), {
    "required": true
  }),
  priceChangeProduct: ProductsField.relationToOne('priceChangeProduct', label('priceChangeProduct'), {
    "required": true
  }),
  priceChangeStall: StallField.relationToOne('priceChangeStall', label('priceChangeStall'), {
    "required": true
  }),
  priceChangeSession: DeviceSessionsField.relationToOne('priceChangeSession', label('priceChangeSession'), {}),
  priceChangeStatus: new EnumeratorField('priceChangeStatus', label('priceChangeStatus'), [
    { id: 'Completed', label: enumeratorLabel('priceChangeStatus', 'Completed') },
    { id: 'Pending', label: enumeratorLabel('priceChangeStatus', 'Pending') },
  ],{}),
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
  priceChangeBeforeRange: new DecimalRangeField(
    'priceChangeBeforeRange',
    label('priceChangeBeforeRange'),
  ),
  priceChangeAfterRange: new DecimalRangeField(
    'priceChangeAfterRange',
    label('priceChangeAfterRange'),
  ),
};

export class PriceChangeModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
