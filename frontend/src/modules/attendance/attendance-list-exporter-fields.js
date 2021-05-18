import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

export default [
  fields.id,
  fields.attendanceRef,
  fields.attendanceStaff,
  fields.attendanceClockIn,
  fields.attendanceClockOut,
  fields.attendanceNote,
  fields.expenseStall,
  fields.createdAt
];
