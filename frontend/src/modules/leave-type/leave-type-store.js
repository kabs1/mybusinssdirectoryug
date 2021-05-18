import leaveTypeListStore from '@/modules/leave-type/leave-type-list-store';
import leaveTypeViewStore from '@/modules/leave-type/leave-type-view-store';
import leaveTypeImporterStore from '@/modules/leave-type/leave-type-importer-store';
import leaveTypeFormStore from '@/modules/leave-type/leave-type-form-store';
import leaveTypeDestroyStore from '@/modules/leave-type/leave-type-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: leaveTypeDestroyStore,
    form: leaveTypeFormStore,
    list: leaveTypeListStore,
    view: leaveTypeViewStore,
    importer: leaveTypeImporterStore,
  },
};
