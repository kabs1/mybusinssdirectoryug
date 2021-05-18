import { RegisterModel } from '@/modules/register/register-model';

const { fields } = RegisterModel;

export default [
  fields.registerRef,
  fields.registerStall,
  fields.registerStaff,
  fields.registerOpeningValue,
  fields.registerClosingValue,
  fields.registerSaleValue,
  fields.registerSaleItems,
  fields.registerSaleRef,
  fields.registerReturnsRef,
  fields.registerOpenTime,
  fields.registerCloseTime,
];
