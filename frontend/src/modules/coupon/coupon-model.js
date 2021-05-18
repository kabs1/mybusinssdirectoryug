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
import { StallField } from '@/modules/stall/stall-field';
import { SalesField } from '@/modules/sales/sales-field';

function label(name) {
  return i18n(`entities.coupon.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.coupon.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  couponCode: new StringField('couponCode', label('couponCode'), {
    "required": true,
    "max": 10,
    "min": 5
  }),
  couponType: new EnumeratorField('couponType', label('couponType'), [
    { id: 'Percentage', label: enumeratorLabel('couponType', 'Percentage') },
    { id: 'Fixed', label: enumeratorLabel('couponType', 'Fixed') },
  ],{
    "required": true
  }),
  couponValue: new DecimalField('couponValue', label('couponValue'), {
    "required": true
  }),
  couponMinAmount: new DecimalField('couponMinAmount', label('couponMinAmount'), {
    "required": true
  }),
  couponStartDate: new DateField('couponStartDate', label('couponStartDate'), {
    "required": true
  }),
  couponEndDate: new DateField('couponEndDate', label('couponEndDate'), {
    "required": true
  }),
  couponStall: StallField.relationToOne('couponStall', label('couponStall'), {
    "required": true
  }),
  couponStatus: new EnumeratorField('couponStatus', label('couponStatus'), [
    { id: 'Active', label: enumeratorLabel('couponStatus', 'Active') },
    { id: 'Inactive', label: enumeratorLabel('couponStatus', 'Inactive') },
  ],{
    "required": true
  }),
  couponMaxUse: new IntegerField('couponMaxUse', label('couponMaxUse'), {
    "required": true
  }),
  couponUsageCount: new IntegerField('couponUsageCount', label('couponUsageCount'), {}),
  couponSalesUsed: SalesField.relationToMany('couponSalesUsed', label('couponSalesUsed'), {}),
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
  couponValueRange: new DecimalRangeField(
    'couponValueRange',
    label('couponValueRange'),
  ),
  couponMinAmountRange: new DecimalRangeField(
    'couponMinAmountRange',
    label('couponMinAmountRange'),
  ),
  couponStartDateRange: new DateRangeField(
    'couponStartDateRange',
    label('couponStartDateRange'),
  ),
  couponEndDateRange: new DateRangeField(
    'couponEndDateRange',
    label('couponEndDateRange'),
  ),
  couponMaxUseRange: new IntegerRangeField(
    'couponMaxUseRange',
    label('couponMaxUseRange'),
  ),
  couponUsageCountRange: new IntegerRangeField(
    'couponUsageCountRange',
    label('couponUsageCountRange'),
  ),
};

export class CouponModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
