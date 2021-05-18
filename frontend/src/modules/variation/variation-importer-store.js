import importerStore from '@/shared/importer/importer-store';
import { VariationService } from '@/modules/variation/variation-service';
import variationImporterFields from '@/modules/variation/variation-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  VariationService.import,
  variationImporterFields,
  i18n('entities.variation.importer.fileName'),
  i18n('entities.variation.importer.hint'),
);
