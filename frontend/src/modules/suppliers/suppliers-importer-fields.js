import { SuppliersModel } from '@/modules/suppliers/suppliers-model';

const { fields } = SuppliersModel;

export default [
  fields.supplierProfile,
  fields.supplierNames,
  fields.supplierBusinessName,
  fields.supplierEmail,
  fields.supplierLocation,
  fields.supplierPhoneNumber,
  fields.supplierPayTerm,
  fields.supplierPayType,
  fields.supplierStatus,
  fields.supplierCreditBalance,
  fields.supplierDocs,
  fields.userId,
];
