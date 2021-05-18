import importerStore from '@/shared/importer/importer-store';
import { SalesService } from '@/modules/sales/sales-service';
import salesImporterFields from '@/modules/sales/sales-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  SalesService.import,
  salesImporterFields,
  i18n('entities.sales.importer.fileName'),
  i18n('entities.sales.importer.hint'),
);
