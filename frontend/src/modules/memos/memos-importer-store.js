import importerStore from '@/shared/importer/importer-store';
import { MemosService } from '@/modules/memos/memos-service';
import memosImporterFields from '@/modules/memos/memos-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  MemosService.import,
  memosImporterFields,
  i18n('entities.memos.importer.fileName'),
  i18n('entities.memos.importer.hint'),
);
