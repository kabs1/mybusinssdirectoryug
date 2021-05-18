import { CouponModel } from '@/modules/coupon/coupon-model';

const { fields } = CouponModel;

export default [
  fields.id,
  fields.couponCode,
  fields.couponType,
  fields.couponValue,
  fields.couponMinAmount,
  fields.couponStartDate,
  fields.couponEndDate,
  fields.couponStall,
  fields.couponStatus,
  fields.couponMaxUse,
  fields.couponUsageCount,
  fields.couponSalesUsed,
  fields.createdAt
];
