import assetsListStore from '@/modules/assets/assets-list-store';
import assetsViewStore from '@/modules/assets/assets-view-store';
import assetsImporterStore from '@/modules/assets/assets-importer-store';
import assetsFormStore from '@/modules/assets/assets-form-store';
import assetsDestroyStore from '@/modules/assets/assets-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: assetsDestroyStore,
    form: assetsFormStore,
    list: assetsListStore,
    view: assetsViewStore,
    importer: assetsImporterStore,
  },
};
