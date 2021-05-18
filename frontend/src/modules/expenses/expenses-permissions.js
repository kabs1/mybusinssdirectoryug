import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ExpensesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.expensesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.expensesImport,
    );
    this.expensesAutocomplete = permissionChecker.match(
      Permissions.values.expensesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.expensesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.expensesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.expensesDestroy,
    );
  }
}
