import purchasesListStore from '@/modules/purchases/purchases-list-store';
import purchasesViewStore from '@/modules/purchases/purchases-view-store';
import purchasesImporterStore from '@/modules/purchases/purchases-importer-store';
import purchasesFormStore from '@/modules/purchases/purchases-form-store';
import purchasesDestroyStore from '@/modules/purchases/purchases-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: purchasesDestroyStore,
    form: purchasesFormStore,
    list: purchasesListStore,
    view: purchasesViewStore,
    importer: purchasesImporterStore,
  },
};
