import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { StaffField } from '@/modules/staff/staff-field';
import { StallField } from '@/modules/stall/stall-field';

function label(name) {
  return i18n(`entities.attendance.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  attendanceRef: new StringField('attendanceRef', label('attendanceRef'), {
    "required": true,
    "max": 15,
    "min": 3
  }),
  attendanceStaff: StaffField.relationToOne('attendanceStaff', label('attendanceStaff'), {
    "required": true
  }),
  attendanceClockIn: new DateTimeField('attendanceClockIn', label('attendanceClockIn'), {
    "required": true
  }),
  attendanceClockOut: new DateTimeField('attendanceClockOut', label('attendanceClockOut'), {
    "required": true
  }),
  attendanceNote: new StringField('attendanceNote', label('attendanceNote'), {
    "max": 250
  }),
  expenseStall: StallField.relationToMany('expenseStall', label('expenseStall'), {
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
  attendanceClockInRange: new DateTimeRangeField(
    'attendanceClockInRange',
    label('attendanceClockInRange'),
  ),
  attendanceClockOutRange: new DateTimeRangeField(
    'attendanceClockOutRange',
    label('attendanceClockOutRange'),
  ),
};

export class AttendanceModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
