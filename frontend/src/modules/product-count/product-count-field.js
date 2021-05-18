import { ProductCountService } from '@/modules/product-count/product-count-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ProductCountField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/product-count',
      Permissions.values.productCountRead,
      ProductCountService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.count,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/product-count',
      Permissions.values.productCountRead,
      ProductCountService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.count,
        };
      },
      options,
    );
  }
}
