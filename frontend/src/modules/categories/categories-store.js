import categoriesListStore from '@/modules/categories/categories-list-store';
import categoriesViewStore from '@/modules/categories/categories-view-store';
import categoriesImporterStore from '@/modules/categories/categories-importer-store';
import categoriesFormStore from '@/modules/categories/categories-form-store';
import categoriesDestroyStore from '@/modules/categories/categories-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: categoriesDestroyStore,
    form: categoriesFormStore,
    list: categoriesListStore,
    view: categoriesViewStore,
    importer: categoriesImporterStore,
  },
};
