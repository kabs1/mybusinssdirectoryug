import importerStore from '@/shared/importer/importer-store';
import { ProductValueService } from '@/modules/product-value/product-value-service';
import productValueImporterFields from '@/modules/product-value/product-value-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ProductValueService.import,
  productValueImporterFields,
  i18n('entities.productValue.importer.fileName'),
  i18n('entities.productValue.importer.hint'),
);
