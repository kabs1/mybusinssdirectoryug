import { ProductLogsModel } from '@/modules/product-logs/product-logs-model';

const { fields } = ProductLogsModel;

export default [
  fields.productLogRef,
  fields.productLogProduct,
  fields.productLogStall,
  fields.productLogSellingPrice,
  fields.productLogMargin,
  fields.productLogBuyingPrice,
  fields.productLogCurrentStock,
  fields.productLogSoldUnits,
  fields.productLogAdjustedUnits,
  fields.productLogDamagedUnits,
  fields.productLogReturnedUnits,
  fields.productLogPurchasedUnits,
  fields.productLogTransferredUnits,
  fields.productLogPurchaseRef,
  fields.productLogSaleRef,
  fields.productLogReturnsRef,
  fields.productLogAdjustRef,
  fields.productLogTransferredRef,
  fields.productLogDamageRef,
];
