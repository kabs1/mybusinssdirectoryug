import { PayrollService } from '@/modules/payroll/payroll-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class PayrollField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/payroll',
      Permissions.values.payrollRead,
      PayrollService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/payroll',
      Permissions.values.payrollRead,
      PayrollService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
