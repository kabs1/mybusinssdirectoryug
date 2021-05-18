import { PurchasesService } from '@/modules/purchases/purchases-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class PurchasesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/purchases',
      Permissions.values.purchasesRead,
      PurchasesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.purchasesRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/purchases',
      Permissions.values.purchasesRead,
      PurchasesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.purchasesRef,
        };
      },
      options,
    );
  }
}
