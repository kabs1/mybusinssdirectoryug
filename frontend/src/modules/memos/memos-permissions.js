import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class MemosPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.memosRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.memosImport,
    );
    this.memosAutocomplete = permissionChecker.match(
      Permissions.values.memosAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.memosCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.memosEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.memosDestroy,
    );
  }
}
