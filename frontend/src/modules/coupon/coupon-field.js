import { CouponService } from '@/modules/coupon/coupon-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class CouponField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/coupon',
      Permissions.values.couponRead,
      CouponService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.couponCode,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/coupon',
      Permissions.values.couponRead,
      CouponService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.couponCode,
        };
      },
      options,
    );
  }
}
