import { CategoriesService } from '@/modules/categories/categories-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class CategoriesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/categories',
      Permissions.values.categoriesRead,
      CategoriesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.categoryTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/categories',
      Permissions.values.categoriesRead,
      CategoriesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.categoryTitle,
        };
      },
      options,
    );
  }
}
