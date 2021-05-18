import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { ProductsField } from '@/modules/products/products-field';
import { StallField } from '@/modules/stall/stall-field';
import { PurchasesField } from '@/modules/purchases/purchases-field';
import { SalesField } from '@/modules/sales/sales-field';
import { ReturnsField } from '@/modules/returns/returns-field';
import { StockAdjustmentsField } from '@/modules/stock-adjustments/stock-adjustments-field';
import { StockTransferField } from '@/modules/stock-transfer/stock-transfer-field';
import { DamagesField } from '@/modules/damages/damages-field';

function label(name) {
  return i18n(`entities.productLogs.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  productLogRef: new StringField('productLogRef', label('productLogRef'), {
    "required": true,
    "min": 3,
    "max": 15
  }),
  productLogProduct: ProductsField.relationToOne('productLogProduct', label('productLogProduct'), {
    "required": true
  }),
  productLogStall: StallField.relationToOne('productLogStall', label('productLogStall'), {
    "required": true
  }),
  productLogSellingPrice: new DecimalField('productLogSellingPrice', label('productLogSellingPrice'), {
    "required": true
  }),
  productLogMargin: new DecimalField('productLogMargin', label('productLogMargin'), {}),
  productLogBuyingPrice: new DecimalField('productLogBuyingPrice', label('productLogBuyingPrice'), {
    "required": true
  }),
  productLogCurrentStock: new DecimalField('productLogCurrentStock', label('productLogCurrentStock'), {
    "required": true
  }),
  productLogSoldUnits: new DecimalField('productLogSoldUnits', label('productLogSoldUnits'), {}),
  productLogAdjustedUnits: new DecimalField('productLogAdjustedUnits', label('productLogAdjustedUnits'), {}),
  productLogDamagedUnits: new DecimalField('productLogDamagedUnits', label('productLogDamagedUnits'), {}),
  productLogReturnedUnits: new DecimalField('productLogReturnedUnits', label('productLogReturnedUnits'), {}),
  productLogPurchasedUnits: new DecimalField('productLogPurchasedUnits', label('productLogPurchasedUnits'), {}),
  productLogTransferredUnits: new DecimalField('productLogTransferredUnits', label('productLogTransferredUnits'), {}),
  productLogPurchaseRef: PurchasesField.relationToMany('productLogPurchaseRef', label('productLogPurchaseRef'), {}),
  productLogSaleRef: SalesField.relationToMany('productLogSaleRef', label('productLogSaleRef'), {}),
  productLogReturnsRef: ReturnsField.relationToMany('productLogReturnsRef', label('productLogReturnsRef'), {}),
  productLogAdjustRef: StockAdjustmentsField.relationToMany('productLogAdjustRef', label('productLogAdjustRef'), {}),
  productLogTransferredRef: StockTransferField.relationToMany('productLogTransferredRef', label('productLogTransferredRef'), {}),
  productLogDamageRef: DamagesField.relationToMany('productLogDamageRef', label('productLogDamageRef'), {}),
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
  productLogSellingPriceRange: new DecimalRangeField(
    'productLogSellingPriceRange',
    label('productLogSellingPriceRange'),
  ),
  productLogMarginRange: new DecimalRangeField(
    'productLogMarginRange',
    label('productLogMarginRange'),
  ),
  productLogBuyingPriceRange: new DecimalRangeField(
    'productLogBuyingPriceRange',
    label('productLogBuyingPriceRange'),
  ),
  productLogCurrentStockRange: new DecimalRangeField(
    'productLogCurrentStockRange',
    label('productLogCurrentStockRange'),
  ),
  productLogSoldUnitsRange: new DecimalRangeField(
    'productLogSoldUnitsRange',
    label('productLogSoldUnitsRange'),
  ),
  productLogAdjustedUnitsRange: new DecimalRangeField(
    'productLogAdjustedUnitsRange',
    label('productLogAdjustedUnitsRange'),
  ),
  productLogDamagedUnitsRange: new DecimalRangeField(
    'productLogDamagedUnitsRange',
    label('productLogDamagedUnitsRange'),
  ),
  productLogReturnedUnitsRange: new DecimalRangeField(
    'productLogReturnedUnitsRange',
    label('productLogReturnedUnitsRange'),
  ),
  productLogPurchasedUnitsRange: new DecimalRangeField(
    'productLogPurchasedUnitsRange',
    label('productLogPurchasedUnitsRange'),
  ),
  productLogTransferredUnitsRange: new DecimalRangeField(
    'productLogTransferredUnitsRange',
    label('productLogTransferredUnitsRange'),
  ),
};

export class ProductLogsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
