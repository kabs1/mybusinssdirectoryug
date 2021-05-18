import { RegisterService } from '@/modules/register/register-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class RegisterField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/register',
      Permissions.values.registerRead,
      RegisterService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.registerRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/register',
      Permissions.values.registerRead,
      RegisterService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.registerRef,
        };
      },
      options,
    );
  }
}
