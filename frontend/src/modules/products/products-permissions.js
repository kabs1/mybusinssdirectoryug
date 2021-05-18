import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ProductsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.productsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.productsImport,
    );
    this.productsAutocomplete = permissionChecker.match(
      Permissions.values.productsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.productsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.productsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.productsDestroy,
    );
  }
}
