import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';

function label(name) {
  return i18n(`entities.variation.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  variationName: new StringField('variationName', label('variationName'), {
    "required": true
  }),
  variationValues: new StringField('variationValues', label('variationValues'), {
    "max": 250,
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

};

export class VariationModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
