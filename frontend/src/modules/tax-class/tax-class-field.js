import { TaxClassService } from '@/modules/tax-class/tax-class-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class TaxClassField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/tax-class',
      Permissions.values.taxClassRead,
      TaxClassService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.taxClassName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/tax-class',
      Permissions.values.taxClassRead,
      TaxClassService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.taxClassName,
        };
      },
      options,
    );
  }
}
