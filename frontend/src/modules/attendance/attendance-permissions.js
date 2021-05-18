import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class AttendancePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.attendanceRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.attendanceImport,
    );
    this.attendanceAutocomplete = permissionChecker.match(
      Permissions.values.attendanceAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.attendanceCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.attendanceEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.attendanceDestroy,
    );
  }
}
