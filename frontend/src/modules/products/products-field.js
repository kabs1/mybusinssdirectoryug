import { ProductsService } from '@/modules/products/products-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ProductsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/products',
      Permissions.values.productsRead,
      ProductsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.productName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/products',
      Permissions.values.productsRead,
      ProductsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.productName,
        };
      },
      options,
    );
  }
}
