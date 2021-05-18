import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DocumentsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.documentsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.documentsImport,
    );
    this.documentsAutocomplete = permissionChecker.match(
      Permissions.values.documentsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.documentsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.documentsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.documentsDestroy,
    );
  }
}
