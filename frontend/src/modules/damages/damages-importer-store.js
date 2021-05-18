import importerStore from '@/shared/importer/importer-store';
import { DamagesService } from '@/modules/damages/damages-service';
import damagesImporterFields from '@/modules/damages/damages-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DamagesService.import,
  damagesImporterFields,
  i18n('entities.damages.importer.fileName'),
  i18n('entities.damages.importer.hint'),
);
