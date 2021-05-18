import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { LeaveTypeField } from '@/modules/leave-type/leave-type-field';
import { StaffField } from '@/modules/staff/staff-field';
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';

function label(name) {
  return i18n(`entities.leave.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  leaveRef: new StringField('leaveRef', label('leaveRef'), {
    "required": true,
    "max": 15
  }),
  leaveUserId: UserField.relationToOne('leaveUserId', label('leaveUserId'), {
    "required": true
  }),
  leaveType: LeaveTypeField.relationToOne('leaveType', label('leaveType'), {
    "required": true
  }),
  leaveStartDate: new DateField('leaveStartDate', label('leaveStartDate'), {
    "required": true
  }),
  leaveEndDate: new DateField('leaveEndDate', label('leaveEndDate'), {
    "required": true
  }),
  leaveNote: new StringField('leaveNote', label('leaveNote'), {
    "required": true
  }),
  leaveDocs: new FilesField('leaveDocs', label('leaveDocs'), 'leave/leaveDocs',{}),
  leaveAssignedStaff: StaffField.relationToOne('leaveAssignedStaff', label('leaveAssignedStaff'), {}),
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
  leaveStartDateRange: new DateRangeField(
    'leaveStartDateRange',
    label('leaveStartDateRange'),
  ),
  leaveEndDateRange: new DateRangeField(
    'leaveEndDateRange',
    label('leaveEndDateRange'),
  ),
};

export class LeaveModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
