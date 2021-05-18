import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class SuppliersPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.suppliersRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.suppliersImport,
    );
    this.suppliersAutocomplete = permissionChecker.match(
      Permissions.values.suppliersAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.suppliersCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.suppliersEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.suppliersDestroy,
    );
  }
}
