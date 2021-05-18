import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.categories.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  categoryCover: new ImagesField('categoryCover', label('categoryCover'), 'categories/categoryCover',{
    "max": 1
  }),
  categoryTitle: new StringField('categoryTitle', label('categoryTitle'), {
    "required": true
  }),
  categoryShortCode: new StringField('categoryShortCode', label('categoryShortCode'), {
    "max": 6
  }),
  categoryDetails: new StringField('categoryDetails', label('categoryDetails'), {
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

export class CategoriesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
