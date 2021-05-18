import { PriceChangeService } from '@/modules/price-change/price-change-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class PriceChangeField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/price-change',
      Permissions.values.priceChangeRead,
      PriceChangeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.priceChangeRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/price-change',
      Permissions.values.priceChangeRead,
      PriceChangeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.priceChangeRef,
        };
      },
      options,
    );
  }
}
