import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class NoticePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.noticeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.noticeImport,
    );
    this.noticeAutocomplete = permissionChecker.match(
      Permissions.values.noticeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.noticeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.noticeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.noticeDestroy,
    );
  }
}
