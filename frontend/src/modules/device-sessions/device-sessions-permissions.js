import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DeviceSessionsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.deviceSessionsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.deviceSessionsImport,
    );
    this.deviceSessionsAutocomplete = permissionChecker.match(
      Permissions.values.deviceSessionsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.deviceSessionsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.deviceSessionsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.deviceSessionsDestroy,
    );
  }
}
