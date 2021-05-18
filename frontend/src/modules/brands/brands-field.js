import { BrandsService } from '@/modules/brands/brands-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class BrandsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/brands',
      Permissions.values.brandsRead,
      BrandsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.brandTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/brands',
      Permissions.values.brandsRead,
      BrandsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.brandTitle,
        };
      },
      options,
    );
  }
}
