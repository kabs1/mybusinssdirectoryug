import { CustomersModel } from '@/modules/customers/customers-model';

const { fields } = CustomersModel;

export default [
  fields.customerProfile,
  fields.customerNames,
  fields.customerEmail,
  fields.customerUserId,
  fields.customerPhoneNumber,
  fields.customerLocation,
  fields.customerDiscount,
  fields.customerStatus,
  fields.customerCode,
  fields.customerAccountBalance,
  fields.customerCustomField,
  fields.customerDocs,
  fields.customerLoyaltyPoints,
  fields.customerCreditBalance,
];
