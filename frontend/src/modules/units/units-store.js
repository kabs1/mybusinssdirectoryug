import unitsListStore from '@/modules/units/units-list-store';
import unitsViewStore from '@/modules/units/units-view-store';
import unitsImporterStore from '@/modules/units/units-importer-store';
import unitsFormStore from '@/modules/units/units-form-store';
import unitsDestroyStore from '@/modules/units/units-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: unitsDestroyStore,
    form: unitsFormStore,
    list: unitsListStore,
    view: unitsViewStore,
    importer: unitsImporterStore,
  },
};
