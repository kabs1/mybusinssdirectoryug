import importerStore from '@/shared/importer/importer-store';
import { ProductLogsService } from '@/modules/product-logs/product-logs-service';
import productLogsImporterFields from '@/modules/product-logs/product-logs-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ProductLogsService.import,
  productLogsImporterFields,
  i18n('entities.productLogs.importer.fileName'),
  i18n('entities.productLogs.importer.hint'),
);
