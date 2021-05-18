import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class PriceChangePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.priceChangeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.priceChangeImport,
    );
    this.priceChangeAutocomplete = permissionChecker.match(
      Permissions.values.priceChangeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.priceChangeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.priceChangeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.priceChangeDestroy,
    );
  }
}
