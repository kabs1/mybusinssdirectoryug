import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';

function label(name) {
  return i18n(`entities.leaveType.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.leaveType.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  leaveTypeTitle: new StringField('leaveTypeTitle', label('leaveTypeTitle'), {
    "required": true
  }),
  leaveTypeDetails: new StringField('leaveTypeDetails', label('leaveTypeDetails'), {
    "max": 250
  }),
  leaveCategory: new EnumeratorField('leaveCategory', label('leaveCategory'), [
    { id: 'monthly', label: enumeratorLabel('leaveCategory', 'monthly') },
    { id: 'yearly', label: enumeratorLabel('leaveCategory', 'yearly') },
    { id: 'None', label: enumeratorLabel('leaveCategory', 'None') },
    { id: 'Sick', label: enumeratorLabel('leaveCategory', 'Sick') },
    { id: 'Study', label: enumeratorLabel('leaveCategory', 'Study') },
    { id: 'Special', label: enumeratorLabel('leaveCategory', 'Special') },
    { id: 'Maternity', label: enumeratorLabel('leaveCategory', 'Maternity') },
    { id: 'Paternity', label: enumeratorLabel('leaveCategory', 'Paternity') },
    { id: 'Unauthorised', label: enumeratorLabel('leaveCategory', 'Unauthorised') },
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

};

export class LeaveTypeModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
