import stallListStore from '@/modules/stall/stall-list-store';
import stallViewStore from '@/modules/stall/stall-view-store';
import stallImporterStore from '@/modules/stall/stall-importer-store';
import stallFormStore from '@/modules/stall/stall-form-store';
import stallDestroyStore from '@/modules/stall/stall-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: stallDestroyStore,
    form: stallFormStore,
    list: stallListStore,
    view: stallViewStore,
    importer: stallImporterStore,
  },
};
