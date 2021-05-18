import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class StockAdjustmentsPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.stockAdjustmentsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.stockAdjustmentsImport,
    );
    this.stockAdjustmentsAutocomplete = permissionChecker.match(
      Permissions.values.stockAdjustmentsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.stockAdjustmentsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.stockAdjustmentsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.stockAdjustmentsDestroy,
    );
  }
}
