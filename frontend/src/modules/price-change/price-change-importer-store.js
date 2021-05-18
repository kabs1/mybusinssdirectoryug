import importerStore from '@/shared/importer/importer-store';
import { PriceChangeService } from '@/modules/price-change/price-change-service';
import priceChangeImporterFields from '@/modules/price-change/price-change-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  PriceChangeService.import,
  priceChangeImporterFields,
  i18n('entities.priceChange.importer.fileName'),
  i18n('entities.priceChange.importer.hint'),
);
