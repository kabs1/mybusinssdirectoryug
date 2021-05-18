import salesListStore from '@/modules/sales/sales-list-store';
import salesViewStore from '@/modules/sales/sales-view-store';
import salesImporterStore from '@/modules/sales/sales-importer-store';
import salesFormStore from '@/modules/sales/sales-form-store';
import salesDestroyStore from '@/modules/sales/sales-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: salesDestroyStore,
    form: salesFormStore,
    list: salesListStore,
    view: salesViewStore,
    importer: salesImporterStore,
  },
};
