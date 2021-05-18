import productsListStore from '@/modules/products/products-list-store';
import productsViewStore from '@/modules/products/products-view-store';
import productsImporterStore from '@/modules/products/products-importer-store';
import productsFormStore from '@/modules/products/products-form-store';
import productsDestroyStore from '@/modules/products/products-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: productsDestroyStore,
    form: productsFormStore,
    list: productsListStore,
    view: productsViewStore,
    importer: productsImporterStore,
  },
};
