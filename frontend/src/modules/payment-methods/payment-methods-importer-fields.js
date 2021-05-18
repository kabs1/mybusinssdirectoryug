import { PaymentMethodsModel } from '@/modules/payment-methods/payment-methods-model';

const { fields } = PaymentMethodsModel;

export default [
  fields.paymentMethodLogo,
  fields.paymentMethodTitle,
  fields.paymentMethodType,
  fields.paymentMethodParams,
  fields.paymentMethodResponse,
  fields.paymentMethodStatus,
  fields.paymentMethodHeader,
  fields.paymentMethodApi,
  fields.paymentMethodCustom1,
  fields.paymentMethodCustom2,
];
