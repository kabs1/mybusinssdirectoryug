import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class TaxClassPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.taxClassRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.taxClassImport,
    );
    this.taxClassAutocomplete = permissionChecker.match(
      Permissions.values.taxClassAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.taxClassCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.taxClassEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.taxClassDestroy,
    );
  }
}
