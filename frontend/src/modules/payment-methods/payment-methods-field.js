import { PaymentMethodsService } from '@/modules/payment-methods/payment-methods-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class PaymentMethodsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/payment-methods',
      Permissions.values.paymentMethodsRead,
      PaymentMethodsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.paymentMethodTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/payment-methods',
      Permissions.values.paymentMethodsRead,
      PaymentMethodsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.paymentMethodTitle,
        };
      },
      options,
    );
  }
}
