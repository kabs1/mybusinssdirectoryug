import { PurchasesModel } from '@/modules/purchases/purchases-model';

const { fields } = PurchasesModel;

export default [
  fields.purchasesRef,
  fields.purchaseProduct,
  fields.purchaseSupplier,
  fields.purchasePaymentStatus,
  fields.purchaseUnits,
  fields.purchaseTotalAmount,
  fields.purchaseReturnsUnits,
  fields.purchaseNote,
  fields.purchaseStall,
  fields.purchaseReturnsReason,
];
