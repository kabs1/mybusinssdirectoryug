import importerStore from '@/shared/importer/importer-store';
import { AssetsService } from '@/modules/assets/assets-service';
import assetsImporterFields from '@/modules/assets/assets-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AssetsService.import,
  assetsImporterFields,
  i18n('entities.assets.importer.fileName'),
  i18n('entities.assets.importer.hint'),
);
