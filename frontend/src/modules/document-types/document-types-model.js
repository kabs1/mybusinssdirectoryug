import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';

function label(name) {
  return i18n(`entities.documentTypes.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  documentTypeTitle: new StringField('documentTypeTitle', label('documentTypeTitle'), {
    "required": true
  }),
  documentTypeNote: new StringField('documentTypeNote', label('documentTypeNote'), {
    "max": 250
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

export class DocumentTypesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
