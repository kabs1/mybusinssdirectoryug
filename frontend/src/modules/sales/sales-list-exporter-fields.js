import { SalesModel } from '@/modules/sales/sales-model';

const { fields } = SalesModel;

export default [
  fields.id,
  fields.salesInvoiceNo,
  fields.salesPaymentStatus,
  fields.salesTotalAmount,
  fields.salesSubTotalAmount,
  fields.salesTotalTax,
  fields.salesTotalIUnits,
  fields.saleNote,
  fields.salesDiscount,
  fields.salesPayload,
  fields.saleReturnsProducts,
  fields.saleReturnsUnits,
  fields.salesReturnReason,
  fields.salePaymentDetails,
  fields.salePaymentType,
  fields.saleCreditBalance,
  fields.saleDevice,
  fields.giftCard,
  fields.salesCoupon,
  fields.salesStall,
  fields.salesRegister,
  fields.salesProductsCount,
  fields.salesProductsValue,
  fields.salesPaymentMethod,
  fields.createdAt
];
