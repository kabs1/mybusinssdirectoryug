import { AssetsService } from '@/modules/assets/assets-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class AssetsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/assets',
      Permissions.values.assetsRead,
      AssetsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.assetName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/assets',
      Permissions.values.assetsRead,
      AssetsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.assetName,
        };
      },
      options,
    );
  }
}
