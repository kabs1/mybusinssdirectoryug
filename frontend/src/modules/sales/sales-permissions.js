import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class SalesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.salesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.salesImport,
    );
    this.salesAutocomplete = permissionChecker.match(
      Permissions.values.salesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.salesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.salesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.salesDestroy,
    );
  }
}
