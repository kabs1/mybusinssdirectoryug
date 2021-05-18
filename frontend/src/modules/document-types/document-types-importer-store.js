import importerStore from '@/shared/importer/importer-store';
import { DocumentTypesService } from '@/modules/document-types/document-types-service';
import documentTypesImporterFields from '@/modules/document-types/document-types-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DocumentTypesService.import,
  documentTypesImporterFields,
  i18n('entities.documentTypes.importer.fileName'),
  i18n('entities.documentTypes.importer.hint'),
);
