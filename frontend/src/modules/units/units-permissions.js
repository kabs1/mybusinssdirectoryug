import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class UnitsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.unitsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.unitsImport,
    );
    this.unitsAutocomplete = permissionChecker.match(
      Permissions.values.unitsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.unitsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.unitsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.unitsDestroy,
    );
  }
}
