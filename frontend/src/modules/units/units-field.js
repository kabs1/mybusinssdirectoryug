import { UnitsService } from '@/modules/units/units-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class UnitsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/units',
      Permissions.values.unitsRead,
      UnitsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.unitsTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/units',
      Permissions.values.unitsRead,
      UnitsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.unitsTitle,
        };
      },
      options,
    );
  }
}
