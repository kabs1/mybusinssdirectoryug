import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DocumentTypesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.documentTypesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.documentTypesImport,
    );
    this.documentTypesAutocomplete = permissionChecker.match(
      Permissions.values.documentTypesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.documentTypesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.documentTypesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.documentTypesDestroy,
    );
  }
}
