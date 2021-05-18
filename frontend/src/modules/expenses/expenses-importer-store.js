import importerStore from '@/shared/importer/importer-store';
import { ExpensesService } from '@/modules/expenses/expenses-service';
import expensesImporterFields from '@/modules/expenses/expenses-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ExpensesService.import,
  expensesImporterFields,
  i18n('entities.expenses.importer.fileName'),
  i18n('entities.expenses.importer.hint'),
);
