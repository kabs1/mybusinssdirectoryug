import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ProductValuePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.productValueRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.productValueImport,
    );
    this.productValueAutocomplete = permissionChecker.match(
      Permissions.values.productValueAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.productValueCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.productValueEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.productValueDestroy,
    );
  }
}
