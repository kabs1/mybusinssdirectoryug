import { GiftCardService } from '@/modules/gift-card/gift-card-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class GiftCardField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/gift-card',
      Permissions.values.giftCardRead,
      GiftCardService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.giftCardNo,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/gift-card',
      Permissions.values.giftCardRead,
      GiftCardService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.giftCardNo,
        };
      },
      options,
    );
  }
}
