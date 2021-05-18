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
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.customers.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.customers.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  customerProfile: new ImagesField('customerProfile', label('customerProfile'), 'customers/customerProfile',{
    "required": true,
    "max": 1
  }),
  customerNames: new StringField('customerNames', label('customerNames'), {
    "required": true
  }),
  customerEmail: new StringField('customerEmail', label('customerEmail'), {
    "required": true
  }),
  customerUserId: UserField.relationToOne('customerUserId', label('customerUserId'), {
    "required": true
  }),
  customerPhoneNumber: new StringField('customerPhoneNumber', label('customerPhoneNumber'), {}),
  customerLocation: new StringField('customerLocation', label('customerLocation'), {}),
  customerDiscount: new DecimalField('customerDiscount', label('customerDiscount'), {}),
  customerStatus: new EnumeratorField('customerStatus', label('customerStatus'), [
    { id: 'active', label: enumeratorLabel('customerStatus', 'active') },
    { id: 'blocked', label: enumeratorLabel('customerStatus', 'blocked') },
    { id: 'suspended', label: enumeratorLabel('customerStatus', 'suspended') },
  ],{
    "required": true
  }),
  customerCode: new IntegerField('customerCode', label('customerCode'), {}),
  customerAccountBalance: new DecimalField('customerAccountBalance', label('customerAccountBalance'), {}),
  customerCustomField: new StringField('customerCustomField', label('customerCustomField'), {}),
  customerDocs: new FilesField('customerDocs', label('customerDocs'), 'customers/customerDocs',{
    "max": 2
  }),
  customerLoyaltyPoints: new DecimalField('customerLoyaltyPoints', label('customerLoyaltyPoints'), {}),
  customerCreditBalance: new DecimalField('customerCreditBalance', label('customerCreditBalance'), {}),
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
  customerDiscountRange: new DecimalRangeField(
    'customerDiscountRange',
    label('customerDiscountRange'),
  ),
  customerCodeRange: new IntegerRangeField(
    'customerCodeRange',
    label('customerCodeRange'),
  ),
  customerAccountBalanceRange: new DecimalRangeField(
    'customerAccountBalanceRange',
    label('customerAccountBalanceRange'),
  ),
  customerLoyaltyPointsRange: new DecimalRangeField(
    'customerLoyaltyPointsRange',
    label('customerLoyaltyPointsRange'),
  ),
  customerCreditBalanceRange: new DecimalRangeField(
    'customerCreditBalanceRange',
    label('customerCreditBalanceRange'),
  ),
};

export class CustomersModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
