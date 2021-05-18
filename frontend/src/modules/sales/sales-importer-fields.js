import { SalesModel } from '@/modules/sales/sales-model';

const { fields } = SalesModel;

export default [
  fields.salesInvoiceNo,
  fields.salesCustomer,
  fields.salesPaymentStatus,
  fields.salesTotalAmount,
  fields.salesSubTotalAmount,
  fields.salesTotalTax,
  fields.salesProducts,
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
  fields.salesItemLoad,
  fields.salesReceipt,
];
