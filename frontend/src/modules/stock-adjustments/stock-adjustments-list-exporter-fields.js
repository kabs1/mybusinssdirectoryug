import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';

const { fields } = StockAdjustmentsModel;

export default [
  fields.id,
  fields.stockAdjustmentRef,
  fields.stockAdjustmentProduct,
  fields.stockAdjustmentType,
  fields.stockAdjustmentUnits,
  fields.adjustmentStall,
  fields.stockAdjustmentClass,
  fields.stockAdjustmentLoss,
  fields.stockAdjustmentRecorverdAmount,
  fields.createdAt
];
