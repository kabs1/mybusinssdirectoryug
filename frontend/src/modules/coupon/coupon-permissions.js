import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class CouponPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.couponRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.couponImport,
    );
    this.couponAutocomplete = permissionChecker.match(
      Permissions.values.couponAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.couponCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.couponEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.couponDestroy,
    );
  }
}
