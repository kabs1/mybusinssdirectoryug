import { ExpenseCategoryService } from '@/modules/expense-category/expense-category-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ExpenseCategoryField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/expense-category',
      Permissions.values.expenseCategoryRead,
      ExpenseCategoryService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.expCategoryTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/expense-category',
      Permissions.values.expenseCategoryRead,
      ExpenseCategoryService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.expCategoryTitle,
        };
      },
      options,
    );
  }
}
