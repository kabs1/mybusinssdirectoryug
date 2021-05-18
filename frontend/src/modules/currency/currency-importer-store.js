import importerStore from '@/shared/importer/importer-store';
import { CurrencyService } from '@/modules/currency/currency-service';
import currencyImporterFields from '@/modules/currency/currency-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CurrencyService.import,
  currencyImporterFields,
  i18n('entities.currency.importer.fileName'),
  i18n('entities.currency.importer.hint'),
);
