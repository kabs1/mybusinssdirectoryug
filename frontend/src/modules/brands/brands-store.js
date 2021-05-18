import brandsListStore from '@/modules/brands/brands-list-store';
import brandsViewStore from '@/modules/brands/brands-view-store';
import brandsImporterStore from '@/modules/brands/brands-importer-store';
import brandsFormStore from '@/modules/brands/brands-form-store';
import brandsDestroyStore from '@/modules/brands/brands-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: brandsDestroyStore,
    form: brandsFormStore,
    list: brandsListStore,
    view: brandsViewStore,
    importer: brandsImporterStore,
  },
};
