import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { DevicesField } from '@/modules/devices/devices-field';
import { UserField } from '@/modules/auth/user-field';

function label(name) {
  return i18n(`entities.deviceSessions.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.deviceSessions.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  sessionDevice: DevicesField.relationToOne('sessionDevice', label('sessionDevice'), {
    "required": true
  }),
  sessionLoginDate: new DateTimeField('sessionLoginDate', label('sessionLoginDate'), {
    "required": true
  }),
  sessionLogoutDate: new DateTimeField('sessionLogoutDate', label('sessionLogoutDate'), {}),
  sessionUser: UserField.relationToOne('sessionUser', label('sessionUser'), {
    "required": true
  }),
  sessionDeviceType: new EnumeratorField('sessionDeviceType', label('sessionDeviceType'), [
    { id: 'POS', label: enumeratorLabel('sessionDeviceType', 'POS') },
    { id: 'Stock', label: enumeratorLabel('sessionDeviceType', 'Stock') },
    { id: 'Customer', label: enumeratorLabel('sessionDeviceType', 'Customer') },
    { id: 'HR', label: enumeratorLabel('sessionDeviceType', 'HR') },
  ],{
    "required": true
  }),
  sessionIp: new StringField('sessionIp', label('sessionIp'), {}),
  sessionNetwork: new StringField('sessionNetwork', label('sessionNetwork'), {}),
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
  sessionLoginDateRange: new DateTimeRangeField(
    'sessionLoginDateRange',
    label('sessionLoginDateRange'),
  ),
  sessionLogoutDateRange: new DateTimeRangeField(
    'sessionLogoutDateRange',
    label('sessionLogoutDateRange'),
  ),
};

export class DeviceSessionsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
