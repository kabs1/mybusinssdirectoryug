import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class AllowanceAndDeductionPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.allowanceAndDeductionRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.allowanceAndDeductionImport,
    );
    this.allowanceAndDeductionAutocomplete = permissionChecker.match(
      Permissions.values.allowanceAndDeductionAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.allowanceAndDeductionCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.allowanceAndDeductionEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.allowanceAndDeductionDestroy,
    );
  }
}
