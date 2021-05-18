import { DocumentTypesService } from '@/modules/document-types/document-types-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class DocumentTypesField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/document-types',
      Permissions.values.documentTypesRead,
      DocumentTypesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.documentTypeTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/document-types',
      Permissions.values.documentTypesRead,
      DocumentTypesService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.documentTypeTitle,
        };
      },
      options,
    );
  }
}
