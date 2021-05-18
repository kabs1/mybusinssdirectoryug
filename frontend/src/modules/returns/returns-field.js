import { ReturnsService } from '@/modules/returns/returns-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ReturnsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/returns',
      Permissions.values.returnsRead,
      ReturnsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.returnRefNo,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/returns',
      Permissions.values.returnsRead,
      ReturnsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.returnRefNo,
        };
      },
      options,
    );
  }
}
