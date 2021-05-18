import { ProductValueService } from '@/modules/product-value/product-value-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ProductValueField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/product-value',
      Permissions.values.productValueRead,
      ProductValueService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.value,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/product-value',
      Permissions.values.productValueRead,
      ProductValueService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.value,
        };
      },
      options,
    );
  }
}
