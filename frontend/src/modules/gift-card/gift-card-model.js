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
import { UserField } from '@/modules/auth/user-field';

function label(name) {
  return i18n(`entities.giftCard.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.giftCard.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  giftCardName: new StringField('giftCardName', label('giftCardName'), {}),
  giftCardNo: new IntegerField('giftCardNo', label('giftCardNo'), {
    "required": true,
    "max": 15,
    "min": 3
  }),
  giftCardAmmount: new DecimalField('giftCardAmmount', label('giftCardAmmount'), {
    "required": true
  }),
  giftCardCustomer: UserField.relationToOne('giftCardCustomer', label('giftCardCustomer'), {
    "required": true
  }),
  giftCardStartDate: new DateField('giftCardStartDate', label('giftCardStartDate'), {
    "required": true
  }),
  giftCardEndDate: new DateField('giftCardEndDate', label('giftCardEndDate'), {
    "required": true
  }),
  giftCardStall: StallField.relationToOne('giftCardStall', label('giftCardStall'), {
    "required": true
  }),
  giftCardStatus: new EnumeratorField('giftCardStatus', label('giftCardStatus'), [
    { id: 'Pending', label: enumeratorLabel('giftCardStatus', 'Pending') },
    { id: 'Used', label: enumeratorLabel('giftCardStatus', 'Used') },
  ],{
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
  giftCardNoRange: new IntegerRangeField(
    'giftCardNoRange',
    label('giftCardNoRange'),
  ),
  giftCardAmmountRange: new DecimalRangeField(
    'giftCardAmmountRange',
    label('giftCardAmmountRange'),
  ),
  giftCardStartDateRange: new DateRangeField(
    'giftCardStartDateRange',
    label('giftCardStartDateRange'),
  ),
  giftCardEndDateRange: new DateRangeField(
    'giftCardEndDateRange',
    label('giftCardEndDateRange'),
  ),
};

export class GiftCardModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
