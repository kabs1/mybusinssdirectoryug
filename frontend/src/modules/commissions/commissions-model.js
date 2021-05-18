import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { StaffField } from '@/modules/staff/staff-field';
import { SalesField } from '@/modules/sales/sales-field';
import { StallField } from '@/modules/stall/stall-field';
import { RegisterField } from '@/modules/register/register-field';

function label(name) {
  return i18n(`entities.commissions.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  commStaff: StaffField.relationToOne('commStaff', label('commStaff'), {
    "required": true
  }),
  commSale: SalesField.relationToOne('commSale', label('commSale'), {
    "required": true
  }),
  commStall: StallField.relationToOne('commStall', label('commStall'), {
    "required": true
  }),
  commRegister: RegisterField.relationToOne('commRegister', label('commRegister'), {
    "required": true
  }),
  commAmount: new DecimalField('commAmount', label('commAmount'), {
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
  commAmountRange: new DecimalRangeField(
    'commAmountRange',
    label('commAmountRange'),
  ),
};

export class CommissionsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
