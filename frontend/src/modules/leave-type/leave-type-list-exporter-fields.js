import { LeaveTypeModel } from '@/modules/leave-type/leave-type-model';

const { fields } = LeaveTypeModel;

export default [
  fields.id,
  fields.leaveTypeTitle,
  fields.leaveTypeDetails,
  fields.leaveCategory,
  fields.createdAt
];
