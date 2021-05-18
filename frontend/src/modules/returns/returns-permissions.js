import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ReturnsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.returnsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.returnsImport,
    );
    this.returnsAutocomplete = permissionChecker.match(
      Permissions.values.returnsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.returnsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.returnsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.returnsDestroy,
    );
  }
}
