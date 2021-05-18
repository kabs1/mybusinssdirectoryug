import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { StallField } from '@/modules/stall/stall-field';
import { StaffField } from '@/modules/staff/staff-field';
import { SalesField } from '@/modules/sales/sales-field';
import { ReturnsField } from '@/modules/returns/returns-field';

function label(name) {
  return i18n(`entities.register.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  registerRef: new StringField('registerRef', label('registerRef'), {
    "required": true
  }),
  registerStall: StallField.relationToOne('registerStall', label('registerStall'), {
    "required": true
  }),
  registerStaff: StaffField.relationToOne('registerStaff', label('registerStaff'), {
    "required": true
  }),
  registerOpeningValue: new DecimalField('registerOpeningValue', label('registerOpeningValue'), {
    "required": true
  }),
  registerClosingValue: new DecimalField('registerClosingValue', label('registerClosingValue'), {
    "required": true
  }),
  registerSaleValue: new DecimalField('registerSaleValue', label('registerSaleValue'), {}),
  registerSaleItems: new DecimalField('registerSaleItems', label('registerSaleItems'), {}),
  registerSaleRef: SalesField.relationToMany('registerSaleRef', label('registerSaleRef'), {}),
  registerReturnsRef: ReturnsField.relationToMany('registerReturnsRef', label('registerReturnsRef'), {
    "required": true
  }),
  registerOpenTime: new DateTimeField('registerOpenTime', label('registerOpenTime'), {
    "required": true
  }),
  registerCloseTime: new DateTimeField('registerCloseTime', label('registerCloseTime'), {}),
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
  registerOpeningValueRange: new DecimalRangeField(
    'registerOpeningValueRange',
    label('registerOpeningValueRange'),
  ),
  registerClosingValueRange: new DecimalRangeField(
    'registerClosingValueRange',
    label('registerClosingValueRange'),
  ),
  registerSaleValueRange: new DecimalRangeField(
    'registerSaleValueRange',
    label('registerSaleValueRange'),
  ),
  registerSaleItemsRange: new DecimalRangeField(
    'registerSaleItemsRange',
    label('registerSaleItemsRange'),
  ),
  registerOpenTimeRange: new DateTimeRangeField(
    'registerOpenTimeRange',
    label('registerOpenTimeRange'),
  ),
  registerCloseTimeRange: new DateTimeRangeField(
    'registerCloseTimeRange',
    label('registerCloseTimeRange'),
  ),
};

export class RegisterModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
