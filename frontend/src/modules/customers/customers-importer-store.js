import importerStore from '@/shared/importer/importer-store';
import { CustomersService } from '@/modules/customers/customers-service';
import customersImporterFields from '@/modules/customers/customers-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CustomersService.import,
  customersImporterFields,
  i18n('entities.customers.importer.fileName'),
  i18n('entities.customers.importer.hint'),
);
