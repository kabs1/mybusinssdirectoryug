import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { StallField } from '@/modules/stall/stall-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.assets.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  assetImage: new ImagesField('assetImage', label('assetImage'), 'assets/assetImage',{
    "max": 2
  }),
  assetName: new StringField('assetName', label('assetName'), {
    "required": true
  }),
  assetDetails: new StringField('assetDetails', label('assetDetails'), {
    "max": 250
  }),
  assetValue: new DecimalField('assetValue', label('assetValue'), {
    "required": true
  }),
  assetDocs: new FilesField('assetDocs', label('assetDocs'), 'assets/assetDocs',{}),
  assetsStall: StallField.relationToMany('assetsStall', label('assetsStall'), {
    "required": true
  }),
  assetPurchaseDate: new DateField('assetPurchaseDate', label('assetPurchaseDate'), {
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
  assetValueRange: new DecimalRangeField(
    'assetValueRange',
    label('assetValueRange'),
  ),
  assetPurchaseDateRange: new DateRangeField(
    'assetPurchaseDateRange',
    label('assetPurchaseDateRange'),
  ),
};

export class AssetsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
