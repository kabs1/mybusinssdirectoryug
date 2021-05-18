import { MemosService } from '@/modules/memos/memos-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class MemosField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/memos',
      Permissions.values.memosRead,
      MemosService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.memosTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/memos',
      Permissions.values.memosRead,
      MemosService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.memosTitle,
        };
      },
      options,
    );
  }
}
