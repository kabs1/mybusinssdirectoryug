import { CustomersService } from '@/modules/customers/customers-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class CustomersField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/customers',
      Permissions.values.customersRead,
      CustomersService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.customerNames,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/customers',
      Permissions.values.customersRead,
      CustomersService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.customerNames,
        };
      },
      options,
    );
  }
}
