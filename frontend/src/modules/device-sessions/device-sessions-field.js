import { DeviceSessionsService } from '@/modules/device-sessions/device-sessions-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class DeviceSessionsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/device-sessions',
      Permissions.values.deviceSessionsRead,
      DeviceSessionsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/device-sessions',
      Permissions.values.deviceSessionsRead,
      DeviceSessionsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
