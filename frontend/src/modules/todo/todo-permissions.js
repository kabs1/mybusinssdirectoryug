import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class TodoPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.todoRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.todoImport,
    );
    this.todoAutocomplete = permissionChecker.match(
      Permissions.values.todoAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.todoCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.todoEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.todoDestroy,
    );
  }
}
