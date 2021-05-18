import { SalesService } from '@/modules/sales/sales-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class SalesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/sales',
      Permissions.values.salesRead,
      SalesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.salesInvoiceNo,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/sales',
      Permissions.values.salesRead,
      SalesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.salesInvoiceNo,
        };
      },
      options,
    );
  }
}
