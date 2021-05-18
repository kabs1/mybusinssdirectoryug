import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';

const { fields } = StockAdjustmentsModel;

export default [
  fields.stockAdjustmentRef,
  fields.stockAdjustmentProduct,
  fields.stockAdjustmentType,
  fields.stockAdjustmentUnits,
  fields.adjustmentStall,
  fields.stockAdjustmentsReason,
  fields.stockAdjustmentClass,
  fields.stockAdjustmentLoss,
  fields.stockAdjustmentRecorverdAmount,
];
