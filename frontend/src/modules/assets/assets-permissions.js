import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class AssetsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.assetsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.assetsImport,
    );
    this.assetsAutocomplete = permissionChecker.match(
      Permissions.values.assetsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.assetsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.assetsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.assetsDestroy,
    );
  }
}
