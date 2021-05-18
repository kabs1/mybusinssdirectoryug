import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class RegisterPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.registerRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.registerImport,
    );
    this.registerAutocomplete = permissionChecker.match(
      Permissions.values.registerAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.registerCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.registerEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.registerDestroy,
    );
  }
}
