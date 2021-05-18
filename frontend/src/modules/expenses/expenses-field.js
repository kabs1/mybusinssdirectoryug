import { ExpensesService } from '@/modules/expenses/expenses-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ExpensesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/expenses',
      Permissions.values.expensesRead,
      ExpensesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.expensesTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/expenses',
      Permissions.values.expensesRead,
      ExpensesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.expensesTitle,
        };
      },
      options,
    );
  }
}
