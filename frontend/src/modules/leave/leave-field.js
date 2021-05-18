import { LeaveService } from '@/modules/leave/leave-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class LeaveField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/leave',
      Permissions.values.leaveRead,
      LeaveService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.leaveRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/leave',
      Permissions.values.leaveRead,
      LeaveService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.leaveRef,
        };
      },
      options,
    );
  }
}
