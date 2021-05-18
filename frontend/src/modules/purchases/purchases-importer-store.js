import importerStore from '@/shared/importer/importer-store';
import { PurchasesService } from '@/modules/purchases/purchases-service';
import purchasesImporterFields from '@/modules/purchases/purchases-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  PurchasesService.import,
  purchasesImporterFields,
  i18n('entities.purchases.importer.fileName'),
  i18n('entities.purchases.importer.hint'),
);
