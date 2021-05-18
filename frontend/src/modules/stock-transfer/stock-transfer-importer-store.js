import importerStore from '@/shared/importer/importer-store';
import { StockTransferService } from '@/modules/stock-transfer/stock-transfer-service';
import stockTransferImporterFields from '@/modules/stock-transfer/stock-transfer-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  StockTransferService.import,
  stockTransferImporterFields,
  i18n('entities.stockTransfer.importer.fileName'),
  i18n('entities.stockTransfer.importer.hint'),
);
