import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class StockTransferPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.stockTransferRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.stockTransferImport,
    );
    this.stockTransferAutocomplete = permissionChecker.match(
      Permissions.values.stockTransferAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.stockTransferCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.stockTransferEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.stockTransferDestroy,
    );
  }
}
