import { CustomersModel } from '@/modules/customers/customers-model';

const { fields } = CustomersModel;

export default [
  fields.id,
  fields.customerNames,
  fields.customerEmail,
  fields.customerUserId,
  fields.customerLocation,
  fields.customerDiscount,
  fields.customerStatus,
  fields.customerCode,
  fields.customerAccountBalance,
  fields.customerCustomField,
  fields.customerLoyaltyPoints,
  fields.customerCreditBalance,
  fields.createdAt
];
