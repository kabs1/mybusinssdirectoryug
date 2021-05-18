import { StockTransferService } from '@/modules/stock-transfer/stock-transfer-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class StockTransferField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/stock-transfer',
      Permissions.values.stockTransferRead,
      StockTransferService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.transferRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/stock-transfer',
      Permissions.values.stockTransferRead,
      StockTransferService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.transferRef,
        };
      },
      options,
    );
  }
}
