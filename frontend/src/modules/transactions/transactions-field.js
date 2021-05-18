import { TransactionsService } from '@/modules/transactions/transactions-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class TransactionsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/transactions',
      Permissions.values.transactionsRead,
      TransactionsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.transactionRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/transactions',
      Permissions.values.transactionsRead,
      TransactionsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.transactionRef,
        };
      },
      options,
    );
  }
}
