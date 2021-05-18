import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DamagesPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.damagesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.damagesImport,
    );
    this.damagesAutocomplete = permissionChecker.match(
      Permissions.values.damagesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.damagesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.damagesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.damagesDestroy,
    );
  }
}
