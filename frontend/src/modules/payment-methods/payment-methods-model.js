import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.paymentMethods.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.paymentMethods.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  paymentMethodLogo: new ImagesField('paymentMethodLogo', label('paymentMethodLogo'), 'paymentMethods/paymentMethodLogo',{
    "max": 1,
    "required": true
  }),
  paymentMethodTitle: new StringField('paymentMethodTitle', label('paymentMethodTitle'), {
    "required": true,
    "max": 12
  }),
  paymentMethodType: new EnumeratorField('paymentMethodType', label('paymentMethodType'), [
    { id: 'Online', label: enumeratorLabel('paymentMethodType', 'Online') },
    { id: 'Offline', label: enumeratorLabel('paymentMethodType', 'Offline') },
  ],{
    "required": true
  }),
  paymentMethodParams: new StringField('paymentMethodParams', label('paymentMethodParams'), {}),
  paymentMethodResponse: new StringField('paymentMethodResponse', label('paymentMethodResponse'), {}),
  paymentMethodStatus: new StringField('paymentMethodStatus', label('paymentMethodStatus'), {}),
  paymentMethodHeader: new StringField('paymentMethodHeader', label('paymentMethodHeader'), {}),
  paymentMethodApi: new StringField('paymentMethodApi', label('paymentMethodApi'), {}),
  paymentMethodCustom1: new StringField('paymentMethodCustom1', label('paymentMethodCustom1'), {}),
  paymentMethodCustom2: new StringField('paymentMethodCustom2', label('paymentMethodCustom2'), {}),
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

};

export class PaymentMethodsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
