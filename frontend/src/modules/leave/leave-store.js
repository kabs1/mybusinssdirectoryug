import leaveListStore from '@/modules/leave/leave-list-store';
import leaveViewStore from '@/modules/leave/leave-view-store';
import leaveImporterStore from '@/modules/leave/leave-importer-store';
import leaveFormStore from '@/modules/leave/leave-form-store';
import leaveDestroyStore from '@/modules/leave/leave-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: leaveDestroyStore,
    form: leaveFormStore,
    list: leaveListStore,
    view: leaveViewStore,
    importer: leaveImporterStore,
  },
};
