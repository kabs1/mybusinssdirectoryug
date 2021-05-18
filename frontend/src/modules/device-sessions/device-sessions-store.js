import deviceSessionsListStore from '@/modules/device-sessions/device-sessions-list-store';
import deviceSessionsViewStore from '@/modules/device-sessions/device-sessions-view-store';
import deviceSessionsImporterStore from '@/modules/device-sessions/device-sessions-importer-store';
import deviceSessionsFormStore from '@/modules/device-sessions/device-sessions-form-store';
import deviceSessionsDestroyStore from '@/modules/device-sessions/device-sessions-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: deviceSessionsDestroyStore,
    form: deviceSessionsFormStore,
    list: deviceSessionsListStore,
    view: deviceSessionsViewStore,
    importer: deviceSessionsImporterStore,
  },
};
