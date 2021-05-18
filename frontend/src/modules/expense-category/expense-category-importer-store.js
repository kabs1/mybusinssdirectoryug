import importerStore from '@/shared/importer/importer-store';
import { ExpenseCategoryService } from '@/modules/expense-category/expense-category-service';
import expenseCategoryImporterFields from '@/modules/expense-category/expense-category-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ExpenseCategoryService.import,
  expenseCategoryImporterFields,
  i18n('entities.expenseCategory.importer.fileName'),
  i18n('entities.expenseCategory.importer.hint'),
);
