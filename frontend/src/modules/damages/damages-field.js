import { DamagesService } from '@/modules/damages/damages-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class DamagesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/damages',
      Permissions.values.damagesRead,
      DamagesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.damageRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/damages',
      Permissions.values.damagesRead,
      DamagesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.damageRef,
        };
      },
      options,
    );
  }
}
