import { StallService } from '@/modules/stall/stall-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class StallField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/stall',
      Permissions.values.stallRead,
      StallService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.stallName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/stall',
      Permissions.values.stallRead,
      StallService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.stallName,
        };
      },
      options,
    );
  }
}
