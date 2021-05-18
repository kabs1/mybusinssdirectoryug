import commissionsListStore from '@/modules/commissions/commissions-list-store';
import commissionsViewStore from '@/modules/commissions/commissions-view-store';
import commissionsImporterStore from '@/modules/commissions/commissions-importer-store';
import commissionsFormStore from '@/modules/commissions/commissions-form-store';
import commissionsDestroyStore from '@/modules/commissions/commissions-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: commissionsDestroyStore,
    form: commissionsFormStore,
    list: commissionsListStore,
    view: commissionsViewStore,
    importer: commissionsImporterStore,
  },
};
