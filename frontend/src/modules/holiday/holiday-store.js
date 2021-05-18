import holidayListStore from '@/modules/holiday/holiday-list-store';
import holidayViewStore from '@/modules/holiday/holiday-view-store';
import holidayImporterStore from '@/modules/holiday/holiday-importer-store';
import holidayFormStore from '@/modules/holiday/holiday-form-store';
import holidayDestroyStore from '@/modules/holiday/holiday-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: holidayDestroyStore,
    form: holidayFormStore,
    list: holidayListStore,
    view: holidayViewStore,
    importer: holidayImporterStore,
  },
};
