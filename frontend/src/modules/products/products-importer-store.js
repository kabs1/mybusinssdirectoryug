import importerStore from '@/shared/importer/importer-store';
import { ProductsService } from '@/modules/products/products-service';
import productsImporterFields from '@/modules/products/products-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ProductsService.import,
  productsImporterFields,
  i18n('entities.products.importer.fileName'),
  i18n('entities.products.importer.hint'),
);
