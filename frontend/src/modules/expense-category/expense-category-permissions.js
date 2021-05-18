import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ExpenseCategoryPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.expenseCategoryRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.expenseCategoryImport,
    );
    this.expenseCategoryAutocomplete = permissionChecker.match(
      Permissions.values.expenseCategoryAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.expenseCategoryCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.expenseCategoryEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.expenseCategoryDestroy,
    );
  }
}
