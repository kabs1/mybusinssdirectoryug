import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class CommissionsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.commissionsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.commissionsImport,
    );
    this.commissionsAutocomplete = permissionChecker.match(
      Permissions.values.commissionsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.commissionsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.commissionsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.commissionsDestroy,
    );
  }
}
