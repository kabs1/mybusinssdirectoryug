import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.brands.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  brandCover: new ImagesField('brandCover', label('brandCover'), 'brands/brandCover',{
    "max": 1
  }),
  brandTitle: new StringField('brandTitle', label('brandTitle'), {
    "required": true
  }),
  brandDetails: new StringField('brandDetails', label('brandDetails'), {
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

export class BrandsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
