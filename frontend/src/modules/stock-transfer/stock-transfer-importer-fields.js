import { StockTransferModel } from '@/modules/stock-transfer/stock-transfer-model';

const { fields } = StockTransferModel;

export default [
  fields.transferRef,
  fields.transferProduct,
  fields.transferStallFrom,
  fields.transferStallTo,
  fields.transferUnits,
  fields.transferNote,
  fields.transferStatus,
  fields.transferExpenses,
];
