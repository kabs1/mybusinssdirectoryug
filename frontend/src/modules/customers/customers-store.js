import customersListStore from '@/modules/customers/customers-list-store';
import customersViewStore from '@/modules/customers/customers-view-store';
import customersImporterStore from '@/modules/customers/customers-importer-store';
import customersFormStore from '@/modules/customers/customers-form-store';
import customersDestroyStore from '@/modules/customers/customers-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: customersDestroyStore,
    form: customersFormStore,
    list: customersListStore,
    view: customersViewStore,
    importer: customersImporterStore,
  },
};
