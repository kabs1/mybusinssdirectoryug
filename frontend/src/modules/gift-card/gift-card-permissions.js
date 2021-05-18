import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class GiftCardPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.giftCardRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.giftCardImport,
    );
    this.giftCardAutocomplete = permissionChecker.match(
      Permissions.values.giftCardAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.giftCardCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.giftCardEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.giftCardDestroy,
    );
  }
}
