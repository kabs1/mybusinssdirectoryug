import { AllowanceAndDeductionService } from '@/modules/allowance-and-deduction/allowance-and-deduction-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class AllowanceAndDeductionField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/allowance-and-deduction',
      Permissions.values.allowanceAndDeductionRead,
      AllowanceAndDeductionService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.adRef,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/allowance-and-deduction',
      Permissions.values.allowanceAndDeductionRead,
      AllowanceAndDeductionService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.adRef,
        };
      },
      options,
    );
  }
}
