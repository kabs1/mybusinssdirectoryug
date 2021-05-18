import { NoticeService } from '@/modules/notice/notice-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class NoticeField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/notice',
      Permissions.values.noticeRead,
      NoticeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.noticeTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/notice',
      Permissions.values.noticeRead,
      NoticeService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.noticeTitle,
        };
      },
      options,
    );
  }
}
