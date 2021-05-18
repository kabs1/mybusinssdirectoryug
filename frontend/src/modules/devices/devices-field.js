import { DevicesService } from '@/modules/devices/devices-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class DevicesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/devices',
      Permissions.values.devicesRead,
      DevicesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.deviceSerial,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/devices',
      Permissions.values.devicesRead,
      DevicesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.deviceSerial,
        };
      },
      options,
    );
  }
}
