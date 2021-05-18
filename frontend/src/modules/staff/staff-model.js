import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.staff.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.staff.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  staffProfile: new ImagesField('staffProfile', label('staffProfile'), 'staff/staffProfile',{
    "max": 1,
    "required": true
  }),
  staffNames: new StringField('staffNames', label('staffNames'), {
    "required": true
  }),
  staffUserId: UserField.relationToOne('staffUserId', label('staffUserId'), {
    "required": true
  }),
  staffPhoneNumber: new StringField('staffPhoneNumber', label('staffPhoneNumber'), {}),
  staffAbout: new StringField('staffAbout', label('staffAbout'), {}),
  staffCustomInfo: new StringField('staffCustomInfo', label('staffCustomInfo'), {}),
  staffCv: new FilesField('staffCv', label('staffCv'), 'staff/staffCv',{
    "max": 1
  }),
  staffDocuments: new FilesField('staffDocuments', label('staffDocuments'), 'staff/staffDocuments',{}),
  staffIsAServiceWorker: new EnumeratorField('staffIsAServiceWorker', label('staffIsAServiceWorker'), [
    { id: 'yes', label: enumeratorLabel('staffIsAServiceWorker', 'yes') },
    { id: 'no', label: enumeratorLabel('staffIsAServiceWorker', 'no') },
  ],{
    "required": true
  }),
  staffCommision: new DecimalField('staffCommision', label('staffCommision'), {
    "required": true,
    "min": 0,
    "max": 100
  }),
  staffDateOfBirth: new DateField('staffDateOfBirth', label('staffDateOfBirth'), {}),
  staffMaritalStatus: new EnumeratorField('staffMaritalStatus', label('staffMaritalStatus'), [
    { id: 'Married', label: enumeratorLabel('staffMaritalStatus', 'Married') },
    { id: 'Single', label: enumeratorLabel('staffMaritalStatus', 'Single') },
    { id: 'Divorced', label: enumeratorLabel('staffMaritalStatus', 'Divorced') },
  ],{}),
  staffIdentityCard: new StringField('staffIdentityCard', label('staffIdentityCard'), {}),
  staffAccessApps: new EnumeratorField('staffAccessApps', label('staffAccessApps'), [
    { id: 'Enabled', label: enumeratorLabel('staffAccessApps', 'Enabled') },
    { id: 'Disabled', label: enumeratorLabel('staffAccessApps', 'Disabled') },
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
  staffCommisionRange: new DecimalRangeField(
    'staffCommisionRange',
    label('staffCommisionRange'),
  ),
  staffDateOfBirthRange: new DateRangeField(
    'staffDateOfBirthRange',
    label('staffDateOfBirthRange'),
  ),
};

export class StaffModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
