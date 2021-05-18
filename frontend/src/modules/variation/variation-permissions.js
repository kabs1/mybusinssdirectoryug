import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class VariationPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.variationRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.variationImport,
    );
    this.variationAutocomplete = permissionChecker.match(
      Permissions.values.variationAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.variationCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.variationEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.variationDestroy,
    );
  }
}
