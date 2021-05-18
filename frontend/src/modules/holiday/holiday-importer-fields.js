import { HolidayModel } from '@/modules/holiday/holiday-model';

const { fields } = HolidayModel;

export default [
  fields.holidayCover,
  fields.holidayTitle,
  fields.holidayDetails,
  fields.holidayStartDate,
  fields.holidayEndDate,
  fields.holidayStall,
  fields.holidayStaff,
];
