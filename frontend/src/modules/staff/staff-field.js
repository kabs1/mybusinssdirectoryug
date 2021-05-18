import { StaffService } from '@/modules/staff/staff-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class StaffField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/staff',
      Permissions.values.staffRead,
      StaffService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.staffNames,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/staff',
      Permissions.values.staffRead,
      StaffService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.staffNames,
        };
      },
      options,
    );
  }
}
