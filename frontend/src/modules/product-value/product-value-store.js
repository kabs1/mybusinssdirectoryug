import productValueListStore from '@/modules/product-value/product-value-list-store';
import productValueViewStore from '@/modules/product-value/product-value-view-store';
import productValueImporterStore from '@/modules/product-value/product-value-importer-store';
import productValueFormStore from '@/modules/product-value/product-value-form-store';
import productValueDestroyStore from '@/modules/product-value/product-value-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: productValueDestroyStore,
    form: productValueFormStore,
    list: productValueListStore,
    view: productValueViewStore,
    importer: productValueImporterStore,
  },
};
