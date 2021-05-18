import importerStore from '@/shared/importer/importer-store';
import { ReturnsService } from '@/modules/returns/returns-service';
import returnsImporterFields from '@/modules/returns/returns-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ReturnsService.import,
  returnsImporterFields,
  i18n('entities.returns.importer.fileName'),
  i18n('entities.returns.importer.hint'),
);
