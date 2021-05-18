import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { CurrencyField } from '@/modules/currency/currency-field';
import { StallField } from '@/modules/stall/stall-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.devices.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.devices.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  deviceImage: new ImagesField('deviceImage', label('deviceImage'), 'devices/deviceImage',{
    "max": 2
  }),
  deviceName: new StringField('deviceName', label('deviceName'), {
    "required": true
  }),
  deviceSerial: new StringField('deviceSerial', label('deviceSerial'), {
    "required": true,
    "min": 4
  }),
  deviceType: new EnumeratorField('deviceType', label('deviceType'), [
    { id: 'android', label: enumeratorLabel('deviceType', 'android') },
    { id: 'ios', label: enumeratorLabel('deviceType', 'ios') },
    { id: 'windows', label: enumeratorLabel('deviceType', 'windows') },
    { id: 'mac', label: enumeratorLabel('deviceType', 'mac') },
    { id: 'linux', label: enumeratorLabel('deviceType', 'linux') },
  ],{
    "required": true
  }),
  deviceCurrency: CurrencyField.relationToOne('deviceCurrency', label('deviceCurrency'), {
    "required": true
  }),
  deviceNote: new StringField('deviceNote', label('deviceNote'), {}),
  deviceDocs: new FilesField('deviceDocs', label('deviceDocs'), 'devices/deviceDocs',{
    "max": 1
  }),
  deviceStall: StallField.relationToOne('deviceStall', label('deviceStall'), {
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

export class DevicesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
