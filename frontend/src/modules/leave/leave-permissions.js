import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class LeavePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.leaveRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.leaveImport,
    );
    this.leaveAutocomplete = permissionChecker.match(
      Permissions.values.leaveAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.leaveCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.leaveEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.leaveDestroy,
    );
  }
}
