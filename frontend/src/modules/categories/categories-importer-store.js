import importerStore from '@/shared/importer/importer-store';
import { CategoriesService } from '@/modules/categories/categories-service';
import categoriesImporterFields from '@/modules/categories/categories-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CategoriesService.import,
  categoriesImporterFields,
  i18n('entities.categories.importer.fileName'),
  i18n('entities.categories.importer.hint'),
);
