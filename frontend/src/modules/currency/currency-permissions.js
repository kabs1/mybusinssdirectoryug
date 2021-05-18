import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class CurrencyPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.currencyRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.currencyImport,
    );
    this.currencyAutocomplete = permissionChecker.match(
      Permissions.values.currencyAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.currencyCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.currencyEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.currencyDestroy,
    );
  }
}
