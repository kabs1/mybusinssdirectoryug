import taxClassListStore from '@/modules/tax-class/tax-class-list-store';
import taxClassViewStore from '@/modules/tax-class/tax-class-view-store';
import taxClassImporterStore from '@/modules/tax-class/tax-class-importer-store';
import taxClassFormStore from '@/modules/tax-class/tax-class-form-store';
import taxClassDestroyStore from '@/modules/tax-class/tax-class-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: taxClassDestroyStore,
    form: taxClassFormStore,
    list: taxClassListStore,
    view: taxClassViewStore,
    importer: taxClassImporterStore,
  },
};
