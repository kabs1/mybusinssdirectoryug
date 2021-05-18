import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;

export default [
  fields.id,
  fields.staffNames,
  fields.staffUserId,
  fields.staffPhoneNumber,
  fields.staffAbout,
  fields.staffCustomInfo,
  fields.staffIsAServiceWorker,
  fields.staffCommision,
  fields.staffDateOfBirth,
  fields.staffMaritalStatus,
  fields.staffIdentityCard,
  fields.staffAccessApps,
  fields.createdAt
];
