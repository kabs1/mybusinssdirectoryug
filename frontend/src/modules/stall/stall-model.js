import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.stall.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.stall.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  stallCover: new ImagesField('stallCover', label('stallCover'), 'stall/stallCover',{
    "required": true,
    "max": 1
  }),
  stallName: new StringField('stallName', label('stallName'), {
    "required": true
  }),
  stallType: new EnumeratorField('stallType', label('stallType'), [
    { id: 'warehouse', label: enumeratorLabel('stallType', 'warehouse') },
    { id: 'outlet', label: enumeratorLabel('stallType', 'outlet') },
    { id: 'store', label: enumeratorLabel('stallType', 'store') },
    { id: 'counter', label: enumeratorLabel('stallType', 'counter') },
  ],{
    "required": true
  }),
  stallInfo: new StringField('stallInfo', label('stallInfo'), {
    "max": 250
  }),
  stallLocation: new StringField('stallLocation', label('stallLocation'), {}),
  stallPhoneNumber: new StringField('stallPhoneNumber', label('stallPhoneNumber'), {}),
  stallEmail: new StringField('stallEmail', label('stallEmail'), {}),
  stallIsStatus: new EnumeratorField('stallIsStatus', label('stallIsStatus'), [
    { id: 'public', label: enumeratorLabel('stallIsStatus', 'public') },
    { id: 'private', label: enumeratorLabel('stallIsStatus', 'private') },
  ],{
    "required": true
  }),
  stallPos: new EnumeratorField('stallPos', label('stallPos'), [
    { id: 'enabled', label: enumeratorLabel('stallPos', 'enabled') },
    { id: 'disabled', label: enumeratorLabel('stallPos', 'disabled') },
  ],{}),
  stallLoyaltyPointValue: new DecimalField('stallLoyaltyPointValue', label('stallLoyaltyPointValue'), {}),
  stallCustom1: new StringField('stallCustom1', label('stallCustom1'), {}),
  stallCustom2: new StringField('stallCustom2', label('stallCustom2'), {}),
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
  stallLoyaltyPointValueRange: new DecimalRangeField(
    'stallLoyaltyPointValueRange',
    label('stallLoyaltyPointValueRange'),
  ),
};

export class StallModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
