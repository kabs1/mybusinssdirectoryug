import devicesListStore from '@/modules/devices/devices-list-store';
import devicesViewStore from '@/modules/devices/devices-view-store';
import devicesImporterStore from '@/modules/devices/devices-importer-store';
import devicesFormStore from '@/modules/devices/devices-form-store';
import devicesDestroyStore from '@/modules/devices/devices-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: devicesDestroyStore,
    form: devicesFormStore,
    list: devicesListStore,
    view: devicesViewStore,
    importer: devicesImporterStore,
  },
};
