import importerStore from '@/shared/importer/importer-store';
import { AllowanceAndDeductionService } from '@/modules/allowance-and-deduction/allowance-and-deduction-service';
import allowanceAndDeductionImporterFields from '@/modules/allowance-and-deduction/allowance-and-deduction-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AllowanceAndDeductionService.import,
  allowanceAndDeductionImporterFields,
  i18n('entities.allowanceAndDeduction.importer.fileName'),
  i18n('entities.allowanceAndDeduction.importer.hint'),
);
