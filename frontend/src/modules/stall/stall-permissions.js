import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class StallPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.stallRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.stallImport,
    );
    this.stallAutocomplete = permissionChecker.match(
      Permissions.values.stallAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.stallCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.stallEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.stallDestroy,
    );
  }
}
