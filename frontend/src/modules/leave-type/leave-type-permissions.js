import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class LeaveTypePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.leaveTypeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.leaveTypeImport,
    );
    this.leaveTypeAutocomplete = permissionChecker.match(
      Permissions.values.leaveTypeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.leaveTypeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.leaveTypeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.leaveTypeDestroy,
    );
  }
}
