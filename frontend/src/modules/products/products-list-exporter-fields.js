import { ProductsModel } from '@/modules/products/products-model';

const { fields } = ProductsModel;

export default [
  fields.id,
  fields.productName,
  fields.productEnableStock,
  fields.productSku,
  fields.productCodeType,
  fields.productExpiry,
  fields.productCustomField,
  fields.productDesc,
  fields.productStatus,
  fields.productVariation,
  fields.productColor,
  fields.productStall,
  fields.createdAt
];
