import { SuppliersService } from '@/modules/suppliers/suppliers-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class SuppliersField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/suppliers',
      Permissions.values.suppliersRead,
      SuppliersService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.supplierNames,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/suppliers',
      Permissions.values.suppliersRead,
      SuppliersService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.supplierNames,
        };
      },
      options,
    );
  }
}
