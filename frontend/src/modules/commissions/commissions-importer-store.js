import importerStore from '@/shared/importer/importer-store';
import { CommissionsService } from '@/modules/commissions/commissions-service';
import commissionsImporterFields from '@/modules/commissions/commissions-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CommissionsService.import,
  commissionsImporterFields,
  i18n('entities.commissions.importer.fileName'),
  i18n('entities.commissions.importer.hint'),
);
