import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';

function label(name) {
  return i18n(`entities.units.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.units.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  unitsTitle: new StringField('unitsTitle', label('unitsTitle'), {
    "required": true
  }),
  unitsCode: new StringField('unitsCode', label('unitsCode'), {
    "required": true,
    "max": 4
  }),
  unitsType: new EnumeratorField('unitsType', label('unitsType'), [
    { id: 'decimal', label: enumeratorLabel('unitsType', 'decimal') },
    { id: 'integer', label: enumeratorLabel('unitsType', 'integer') },
    { id: 'none', label: enumeratorLabel('unitsType', 'none') },
  ],{
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

export class UnitsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
