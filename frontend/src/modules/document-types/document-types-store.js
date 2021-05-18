import documentTypesListStore from '@/modules/document-types/document-types-list-store';
import documentTypesViewStore from '@/modules/document-types/document-types-view-store';
import documentTypesImporterStore from '@/modules/document-types/document-types-importer-store';
import documentTypesFormStore from '@/modules/document-types/document-types-form-store';
import documentTypesDestroyStore from '@/modules/document-types/document-types-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: documentTypesDestroyStore,
    form: documentTypesFormStore,
    list: documentTypesListStore,
    view: documentTypesViewStore,
    importer: documentTypesImporterStore,
  },
};
