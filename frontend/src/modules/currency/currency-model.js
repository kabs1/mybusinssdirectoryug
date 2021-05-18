import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';

function label(name) {
  return i18n(`entities.currency.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  currencyTitle: new StringField('currencyTitle', label('currencyTitle'), {
    "required": true
  }),
  currencyCode: new StringField('currencyCode', label('currencyCode'), {
    "required": true,
    "max": 6
  }),
  currencySign: new StringField('currencySign', label('currencySign'), {
    "required": true,
    "max": 4
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

};

export class CurrencyModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
