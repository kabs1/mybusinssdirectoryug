import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class TransactionsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.transactionsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.transactionsImport,
    );
    this.transactionsAutocomplete = permissionChecker.match(
      Permissions.values.transactionsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.transactionsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.transactionsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.transactionsDestroy,
    );
  }
}
