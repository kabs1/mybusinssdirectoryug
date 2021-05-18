import variationListStore from '@/modules/variation/variation-list-store';
import variationViewStore from '@/modules/variation/variation-view-store';
import variationImporterStore from '@/modules/variation/variation-importer-store';
import variationFormStore from '@/modules/variation/variation-form-store';
import variationDestroyStore from '@/modules/variation/variation-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: variationDestroyStore,
    form: variationFormStore,
    list: variationListStore,
    view: variationViewStore,
    importer: variationImporterStore,
  },
};
