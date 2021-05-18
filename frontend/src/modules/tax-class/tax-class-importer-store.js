import importerStore from '@/shared/importer/importer-store';
import { TaxClassService } from '@/modules/tax-class/tax-class-service';
import taxClassImporterFields from '@/modules/tax-class/tax-class-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  TaxClassService.import,
  taxClassImporterFields,
  i18n('entities.taxClass.importer.fileName'),
  i18n('entities.taxClass.importer.hint'),
);
