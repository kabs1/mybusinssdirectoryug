import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class HolidayPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.holidayRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.holidayImport,
    );
    this.holidayAutocomplete = permissionChecker.match(
      Permissions.values.holidayAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.holidayCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.holidayEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.holidayDestroy,
    );
  }
}
