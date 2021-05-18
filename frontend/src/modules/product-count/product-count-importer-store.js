import importerStore from '@/shared/importer/importer-store';
import { ProductCountService } from '@/modules/product-count/product-count-service';
import productCountImporterFields from '@/modules/product-count/product-count-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ProductCountService.import,
  productCountImporterFields,
  i18n('entities.productCount.importer.fileName'),
  i18n('entities.productCount.importer.hint'),
);
