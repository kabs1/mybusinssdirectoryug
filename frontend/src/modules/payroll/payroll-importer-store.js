import importerStore from '@/shared/importer/importer-store';
import { PayrollService } from '@/modules/payroll/payroll-service';
import payrollImporterFields from '@/modules/payroll/payroll-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  PayrollService.import,
  payrollImporterFields,
  i18n('entities.payroll.importer.fileName'),
  i18n('entities.payroll.importer.hint'),
);
