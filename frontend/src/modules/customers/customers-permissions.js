import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class CustomersPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.customersRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.customersImport,
    );
    this.customersAutocomplete = permissionChecker.match(
      Permissions.values.customersAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.customersCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.customersEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.customersDestroy,
    );
  }
}
