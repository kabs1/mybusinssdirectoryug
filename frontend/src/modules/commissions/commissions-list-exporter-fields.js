import { CommissionsModel } from '@/modules/commissions/commissions-model';

const { fields } = CommissionsModel;

export default [
  fields.id,
  fields.commStaff,
  fields.commSale,
  fields.commStall,
  fields.commRegister,
  fields.commAmount,
  fields.createdAt
];
