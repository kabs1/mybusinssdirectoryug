import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class PaymentMethodsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.paymentMethodsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.paymentMethodsImport,
    );
    this.paymentMethodsAutocomplete = permissionChecker.match(
      Permissions.values.paymentMethodsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.paymentMethodsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.paymentMethodsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.paymentMethodsDestroy,
    );
  }
}
