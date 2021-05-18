import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ProductCountPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.productCountRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.productCountImport,
    );
    this.productCountAutocomplete = permissionChecker.match(
      Permissions.values.productCountAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.productCountCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.productCountEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.productCountDestroy,
    );
  }
}
