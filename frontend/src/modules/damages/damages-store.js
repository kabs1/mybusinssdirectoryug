import damagesListStore from '@/modules/damages/damages-list-store';
import damagesViewStore from '@/modules/damages/damages-view-store';
import damagesImporterStore from '@/modules/damages/damages-importer-store';
import damagesFormStore from '@/modules/damages/damages-form-store';
import damagesDestroyStore from '@/modules/damages/damages-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: damagesDestroyStore,
    form: damagesFormStore,
    list: damagesListStore,
    view: damagesViewStore,
    importer: damagesImporterStore,
  },
};
