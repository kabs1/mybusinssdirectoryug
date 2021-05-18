import { LeaveModel } from '@/modules/leave/leave-model';

const { fields } = LeaveModel;

export default [
  fields.id,
  fields.leaveRef,
  fields.leaveUserId,
  fields.leaveType,
  fields.leaveStartDate,
  fields.leaveEndDate,
  fields.leaveNote,
  fields.leaveAssignedStaff,
  fields.createdAt
];
