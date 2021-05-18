import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class CategoriesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.categoriesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.categoriesImport,
    );
    this.categoriesAutocomplete = permissionChecker.match(
      Permissions.values.categoriesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.categoriesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.categoriesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.categoriesDestroy,
    );
  }
}
