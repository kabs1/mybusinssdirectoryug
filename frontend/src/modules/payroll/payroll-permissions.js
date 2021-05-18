import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class PayrollPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.payrollRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.payrollImport,
    );
    this.payrollAutocomplete = permissionChecker.match(
      Permissions.values.payrollAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.payrollCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.payrollEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.payrollDestroy,
    );
  }
}
