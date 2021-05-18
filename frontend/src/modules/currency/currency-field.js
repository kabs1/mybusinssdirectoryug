import { CurrencyService } from '@/modules/currency/currency-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class CurrencyField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/currency',
      Permissions.values.currencyRead,
      CurrencyService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.currencyTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/currency',
      Permissions.values.currencyRead,
      CurrencyService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.currencyTitle,
        };
      },
      options,
    );
  }
}
