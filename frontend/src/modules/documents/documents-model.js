import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { DocumentTypesField } from '@/modules/document-types/document-types-field';
import { StallField } from '@/modules/stall/stall-field';
import FilesField from '@/shared/fields/files-field';

function label(name) {
  return i18n(`entities.documents.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  documentTitle: new StringField('documentTitle', label('documentTitle'), {
    "required": true,
    "max": 20
  }),
  documentDetails: new StringField('documentDetails', label('documentDetails'), {}),
  documentType: DocumentTypesField.relationToOne('documentType', label('documentType'), {
    "required": true
  }),
  docStall: StallField.relationToMany('docStall', label('docStall'), {
    "required": true
  }),
  documentFile: new FilesField('documentFile', label('documentFile'), 'documents/documentFile',{
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

export class DocumentsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
