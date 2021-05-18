import { StockAdjustmentsService } from '@/modules/stock-adjustments/stock-adjustments-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class StockAdjustmentsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/stock-adjustments',
      Permissions.values.stockAdjustmentsRead,
      StockAdjustmentsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.stockAdjustmentsReason,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/stock-adjustments',
      Permissions.values.stockAdjustmentsRead,
      StockAdjustmentsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.stockAdjustmentsReason,
        };
      },
      options,
    );
  }
}
