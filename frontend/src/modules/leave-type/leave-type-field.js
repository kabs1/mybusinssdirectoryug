import { LeaveTypeService } from '@/modules/leave-type/leave-type-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class LeaveTypeField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/leave-type',
      Permissions.values.leaveTypeRead,
      LeaveTypeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.leaveTypeTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/leave-type',
      Permissions.values.leaveTypeRead,
      LeaveTypeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.leaveTypeTitle,
        };
      },
      options,
    );
  }
}
