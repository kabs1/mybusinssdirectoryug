import productCountListStore from '@/modules/product-count/product-count-list-store';
import productCountViewStore from '@/modules/product-count/product-count-view-store';
import productCountImporterStore from '@/modules/product-count/product-count-importer-store';
import productCountFormStore from '@/modules/product-count/product-count-form-store';
import productCountDestroyStore from '@/modules/product-count/product-count-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: productCountDestroyStore,
    form: productCountFormStore,
    list: productCountListStore,
    view: productCountViewStore,
    importer: productCountImporterStore,
  },
};
