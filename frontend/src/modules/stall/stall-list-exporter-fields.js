import { StallModel } from '@/modules/stall/stall-model';

const { fields } = StallModel;

export default [
  fields.id,
  fields.stallCover,
  fields.stallName,
  fields.stallType,
  fields.stallInfo,
  fields.stallLocation,
  fields.stallPhoneNumber,
  fields.stallEmail,
  fields.stallIsStatus,
  fields.stallPos,
  fields.stallLoyaltyPointValue,
  fields.stallCustom1,
  fields.stallCustom2,
  fields.createdAt
];
