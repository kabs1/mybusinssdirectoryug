import importerStore from '@/shared/importer/importer-store';
import { SuppliersService } from '@/modules/suppliers/suppliers-service';
import suppliersImporterFields from '@/modules/suppliers/suppliers-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  SuppliersService.import,
  suppliersImporterFields,
  i18n('entities.suppliers.importer.fileName'),
  i18n('entities.suppliers.importer.hint'),
);
