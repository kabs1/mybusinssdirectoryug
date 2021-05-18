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
import { CustomersField } from '@/modules/customers/customers-field';
import { ProductsField } from '@/modules/products/products-field';
import { ProductCountField } from '@/modules/product-count/product-count-field';
import { DevicesField } from '@/modules/devices/devices-field';
import { GiftCardField } from '@/modules/gift-card/gift-card-field';
import { CouponField } from '@/modules/coupon/coupon-field';
import { StallField } from '@/modules/stall/stall-field';
import { RegisterField } from '@/modules/register/register-field';
import { ProductValueField } from '@/modules/product-value/product-value-field';
import { PaymentMethodsField } from '@/modules/payment-methods/payment-methods-field';

function label(name) {
  return i18n(`entities.sales.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.sales.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  salesInvoiceNo: new IntegerField('salesInvoiceNo', label('salesInvoiceNo'), {
    "required": true,
    "max": 10
  }),
  salesCustomer: CustomersField.relationToOne('salesCustomer', label('salesCustomer'), {}),
  salesPaymentStatus: new EnumeratorField('salesPaymentStatus', label('salesPaymentStatus'), [
    { id: 'credit', label: enumeratorLabel('salesPaymentStatus', 'credit') },
    { id: 'paid', label: enumeratorLabel('salesPaymentStatus', 'paid') },
  ],{
    "required": true
  }),
  salesTotalAmount: new DecimalField('salesTotalAmount', label('salesTotalAmount'), {
    "required": true
  }),
  salesSubTotalAmount: new DecimalField('salesSubTotalAmount', label('salesSubTotalAmount'), {
    "required": true
  }),
  salesTotalTax: new DecimalField('salesTotalTax', label('salesTotalTax'), {
    "required": true
  }),
  salesProducts: ProductsField.relationToMany('salesProducts', label('salesProducts'), {
    "required": true,
    "min": 1
  }),
  salesTotalIUnits: new DecimalField('salesTotalIUnits', label('salesTotalIUnits'), {
    "required": true
  }),
  saleNote: new StringField('saleNote', label('saleNote'), {
    "max": 250
  }),
  salesDiscount: new DecimalField('salesDiscount', label('salesDiscount'), {}),
  salesPayload: new StringField('salesPayload', label('salesPayload'), {
    "required": true
  }),
  saleReturnsProducts: ProductsField.relationToMany('saleReturnsProducts', label('saleReturnsProducts'), {}),
  saleReturnsUnits: ProductCountField.relationToMany('saleReturnsUnits', label('saleReturnsUnits'), {}),
  salesReturnReason: new StringField('salesReturnReason', label('salesReturnReason'), {}),
  salePaymentDetails: new StringField('salePaymentDetails', label('salePaymentDetails'), {}),
  salePaymentType: new StringField('salePaymentType', label('salePaymentType'), {
    "required": true
  }),
  saleCreditBalance: new DecimalField('saleCreditBalance', label('saleCreditBalance'), {
    "required": true
  }),
  saleDevice: DevicesField.relationToOne('saleDevice', label('saleDevice'), {
    "required": true
  }),
  giftCard: GiftCardField.relationToOne('giftCard', label('giftCard'), {}),
  salesCoupon: CouponField.relationToOne('salesCoupon', label('salesCoupon'), {}),
  salesStall: StallField.relationToOne('salesStall', label('salesStall'), {
    "required": true
  }),
  salesRegister: RegisterField.relationToOne('salesRegister', label('salesRegister'), {
    "required": true
  }),
  salesProductsCount: ProductCountField.relationToMany('salesProductsCount', label('salesProductsCount'), {
    "required": true
  }),
  salesProductsValue: ProductValueField.relationToMany('salesProductsValue', label('salesProductsValue'), {
    "required": true
  }),
  salesPaymentMethod: PaymentMethodsField.relationToMany('salesPaymentMethod', label('salesPaymentMethod'), {
    "required": true
  }),
  salesItemLoad: new StringField('salesItemLoad', label('salesItemLoad'), {
    "required": true
  }),
  salesReceipt: new StringField('salesReceipt', label('salesReceipt'), {
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
  salesInvoiceNoRange: new IntegerRangeField(
    'salesInvoiceNoRange',
    label('salesInvoiceNoRange'),
  ),
  salesTotalAmountRange: new DecimalRangeField(
    'salesTotalAmountRange',
    label('salesTotalAmountRange'),
  ),
  salesSubTotalAmountRange: new DecimalRangeField(
    'salesSubTotalAmountRange',
    label('salesSubTotalAmountRange'),
  ),
  salesTotalTaxRange: new DecimalRangeField(
    'salesTotalTaxRange',
    label('salesTotalTaxRange'),
  ),
  salesTotalIUnitsRange: new DecimalRangeField(
    'salesTotalIUnitsRange',
    label('salesTotalIUnitsRange'),
  ),
  salesDiscountRange: new DecimalRangeField(
    'salesDiscountRange',
    label('salesDiscountRange'),
  ),
  saleCreditBalanceRange: new DecimalRangeField(
    'saleCreditBalanceRange',
    label('saleCreditBalanceRange'),
  ),
};

export class SalesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
