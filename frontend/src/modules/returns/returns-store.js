import returnsListStore from '@/modules/returns/returns-list-store';
import returnsViewStore from '@/modules/returns/returns-view-store';
import returnsImporterStore from '@/modules/returns/returns-importer-store';
import returnsFormStore from '@/modules/returns/returns-form-store';
import returnsDestroyStore from '@/modules/returns/returns-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: returnsDestroyStore,
    form: returnsFormStore,
    list: returnsListStore,
    view: returnsViewStore,
    importer: returnsImporterStore,
  },
};
