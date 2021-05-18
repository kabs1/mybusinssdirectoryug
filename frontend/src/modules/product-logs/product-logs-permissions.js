import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ProductLogsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.productLogsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.productLogsImport,
    );
    this.productLogsAutocomplete = permissionChecker.match(
      Permissions.values.productLogsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.productLogsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.productLogsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.productLogsDestroy,
    );
  }
}
