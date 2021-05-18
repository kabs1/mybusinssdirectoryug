import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';

function label(name) {
  return i18n(`entities.productValue.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  value: new DecimalField('value', label('value'), {
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
  valueRange: new DecimalRangeField(
    'valueRange',
    label('valueRange'),
  ),
};

export class ProductValueModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
