import { VariationService } from '@/modules/variation/variation-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class VariationField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/variation',
      Permissions.values.variationRead,
      VariationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.variationName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/variation',
      Permissions.values.variationRead,
      VariationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.variationName,
        };
      },
      options,
    );
  }
}
