import { ProductsModel } from '@/modules/products/products-model';

const { fields } = ProductsModel;

export default [
  fields.productImage,
  fields.productName,
  fields.productUnit,
  fields.productBrand,
  fields.productCategory,
  fields.productTax,
  fields.productEnableStock,
  fields.productAlertQuantity,
  fields.productSku,
  fields.productCodeType,
  fields.productExpiry,
  fields.productCustomField,
  fields.productDesc,
  fields.productStatus,
  fields.productVariation,
  fields.productAttribute,
  fields.productColor,
  fields.productStall,
];
