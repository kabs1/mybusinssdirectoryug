import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';

function label(name) {
  return i18n(`entities.taxClass.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  taxClassName: new StringField('taxClassName', label('taxClassName'), {
    "required": true
  }),
  taxClassPercentage: new IntegerField('taxClassPercentage', label('taxClassPercentage'), {
    "required": true,
    "min": 0,
    "max": 100
  }),
  taxClassDetails: new StringField('taxClassDetails', label('taxClassDetails'), {}),
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
  taxClassPercentageRange: new IntegerRangeField(
    'taxClassPercentageRange',
    label('taxClassPercentageRange'),
  ),
};

export class TaxClassModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
