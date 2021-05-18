import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DevicesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.devicesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.devicesImport,
    );
    this.devicesAutocomplete = permissionChecker.match(
      Permissions.values.devicesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.devicesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.devicesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.devicesDestroy,
    );
  }
}
