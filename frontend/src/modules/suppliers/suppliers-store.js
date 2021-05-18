import suppliersListStore from '@/modules/suppliers/suppliers-list-store';
import suppliersViewStore from '@/modules/suppliers/suppliers-view-store';
import suppliersImporterStore from '@/modules/suppliers/suppliers-importer-store';
import suppliersFormStore from '@/modules/suppliers/suppliers-form-store';
import suppliersDestroyStore from '@/modules/suppliers/suppliers-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: suppliersDestroyStore,
    form: suppliersFormStore,
    list: suppliersListStore,
    view: suppliersViewStore,
    importer: suppliersImporterStore,
  },
};
