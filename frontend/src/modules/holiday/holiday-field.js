import { HolidayService } from '@/modules/holiday/holiday-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class HolidayField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/holiday',
      Permissions.values.holidayRead,
      HolidayService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.holidayTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/holiday',
      Permissions.values.holidayRead,
      HolidayService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.holidayTitle,
        };
      },
      options,
    );
  }
}
