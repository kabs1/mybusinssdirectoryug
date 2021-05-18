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
import { ProductsField } from '@/modules/products/products-field';
import { StallField } from '@/modules/stall/stall-field';
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.damages.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  damageCover: new ImagesField('damageCover', label('damageCover'), 'damages/damageCover',{
    "max": 1,
    "required": true
  }),
  damageRef: new StringField('damageRef', label('damageRef'), {
    "required": true,
    "max": 15,
    "min": 3
  }),
  damageProduct: ProductsField.relationToOne('damageProduct', label('damageProduct'), {
    "required": true
  }),
  damageDate: new DateField('damageDate', label('damageDate'), {
    "required": true
  }),
  damageCausedBy: UserField.relationToMany('damageCausedBy', label('damageCausedBy'), {
    "max": 5
  }),
  damageAmmount: new DecimalField('damageAmmount', label('damageAmmount'), {
    "required": true
  }),
  damageNote: new StringField('damageNote', label('damageNote'), {
    "max": 250
  }),
  damageDocs: new FilesField('damageDocs', label('damageDocs'), 'damages/damageDocs',{}),
  damageStall: StallField.relationToMany('damageStall', label('damageStall'), {
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
  damageDateRange: new DateRangeField(
    'damageDateRange',
    label('damageDateRange'),
  ),
  damageAmmountRange: new DecimalRangeField(
    'damageAmmountRange',
    label('damageAmmountRange'),
  ),
};

export class DamagesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
