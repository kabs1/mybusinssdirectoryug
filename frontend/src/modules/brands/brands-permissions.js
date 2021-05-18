import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class BrandsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.brandsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.brandsImport,
    );
    this.brandsAutocomplete = permissionChecker.match(
      Permissions.values.brandsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.brandsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.brandsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.brandsDestroy,
    );
  }
}
