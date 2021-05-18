import importerStore from '@/shared/importer/importer-store';
import { DocumentsService } from '@/modules/documents/documents-service';
import documentsImporterFields from '@/modules/documents/documents-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DocumentsService.import,
  documentsImporterFields,
  i18n('entities.documents.importer.fileName'),
  i18n('entities.documents.importer.hint'),
);
