import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { UnitsField } from '@/modules/units/units-field';
import { BrandsField } from '@/modules/brands/brands-field';
import { CategoriesField } from '@/modules/categories/categories-field';
import { TaxClassField } from '@/modules/tax-class/tax-class-field';
import { VariationField } from '@/modules/variation/variation-field';
import { StallField } from '@/modules/stall/stall-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.products.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.products.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  productImage: new ImagesField('productImage', label('productImage'), 'products/productImage',{
    "required": true,
    "max": 3
  }),
  productName: new StringField('productName', label('productName'), {
    "required": true
  }),
  productUnit: UnitsField.relationToOne('productUnit', label('productUnit'), {
    "required": true
  }),
  productBrand: BrandsField.relationToOne('productBrand', label('productBrand'), {
    "required": true
  }),
  productCategory: CategoriesField.relationToOne('productCategory', label('productCategory'), {
    "required": true
  }),
  productTax: TaxClassField.relationToOne('productTax', label('productTax'), {
    "required": true
  }),
  productEnableStock: new EnumeratorField('productEnableStock', label('productEnableStock'), [
    { id: 'enabled', label: enumeratorLabel('productEnableStock', 'enabled') },
    { id: 'disabled', label: enumeratorLabel('productEnableStock', 'disabled') },
  ],{
    "required": true
  }),
  productAlertQuantity: new DecimalField('productAlertQuantity', label('productAlertQuantity'), {}),
  productSku: new IntegerField('productSku', label('productSku'), {
    "required": true,
    "max": 100000
  }),
  productCodeType: new EnumeratorField('productCodeType', label('productCodeType'), [
    { id: 'barcode', label: enumeratorLabel('productCodeType', 'barcode') },
    { id: 'qr', label: enumeratorLabel('productCodeType', 'qr') },
    { id: 'other', label: enumeratorLabel('productCodeType', 'other') },
  ],{}),
  productExpiry: new DateField('productExpiry', label('productExpiry'), {}),
  productCustomField: new StringField('productCustomField', label('productCustomField'), {}),
  productDesc: new StringField('productDesc', label('productDesc'), {
    "max": 250
  }),
  productStatus: new EnumeratorField('productStatus', label('productStatus'), [
    { id: 'public', label: enumeratorLabel('productStatus', 'public') },
    { id: 'private', label: enumeratorLabel('productStatus', 'private') },
  ],{
    "required": true
  }),
  productVariation: VariationField.relationToOne('productVariation', label('productVariation'), {}),
  productAttribute: new StringField('productAttribute', label('productAttribute'), {}),
  productColor: new StringField('productColor', label('productColor'), {}),
  productStall: StallField.relationToMany('productStall', label('productStall'), {
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  productAlertQuantityRange: new DecimalRangeField(
    'productAlertQuantityRange',
    label('productAlertQuantityRange'),
  ),
  productSkuRange: new IntegerRangeField(
    'productSkuRange',
    label('productSkuRange'),
  ),
  productExpiryRange: new DateRangeField(
    'productExpiryRange',
    label('productExpiryRange'),
  ),
};

export class ProductsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
