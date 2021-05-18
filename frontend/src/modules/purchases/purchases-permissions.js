import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class PurchasesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.purchasesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.purchasesImport,
    );
    this.purchasesAutocomplete = permissionChecker.match(
      Permissions.values.purchasesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.purchasesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.purchasesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.purchasesDestroy,
    );
  }
}
