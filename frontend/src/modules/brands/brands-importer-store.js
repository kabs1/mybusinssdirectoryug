import importerStore from '@/shared/importer/importer-store';
import { BrandsService } from '@/modules/brands/brands-service';
import brandsImporterFields from '@/modules/brands/brands-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  BrandsService.import,
  brandsImporterFields,
  i18n('entities.brands.importer.fileName'),
  i18n('entities.brands.importer.hint'),
);
