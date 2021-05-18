import importerStore from '@/shared/importer/importer-store';
import { TransactionsService } from '@/modules/transactions/transactions-service';
import transactionsImporterFields from '@/modules/transactions/transactions-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  TransactionsService.import,
  transactionsImporterFields,
  i18n('entities.transactions.importer.fileName'),
  i18n('entities.transactions.importer.hint'),
);
