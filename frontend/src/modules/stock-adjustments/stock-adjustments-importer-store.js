import importerStore from '@/shared/importer/importer-store';
import { StockAdjustmentsService } from '@/modules/stock-adjustments/stock-adjustments-service';
import stockAdjustmentsImporterFields from '@/modules/stock-adjustments/stock-adjustments-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  StockAdjustmentsService.import,
  stockAdjustmentsImporterFields,
  i18n('entities.stockAdjustments.importer.fileName'),
  i18n('entities.stockAdjustments.importer.hint'),
);
