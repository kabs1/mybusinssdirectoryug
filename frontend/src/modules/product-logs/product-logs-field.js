import { ProductLogsService } from '@/modules/product-logs/product-logs-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ProductLogsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/product-logs',
      Permissions.values.productLogsRead,
      ProductLogsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.productLogRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/product-logs',
      Permissions.values.productLogsRead,
      ProductLogsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.productLogRef,
        };
      },
      options,
    );
  }
}
