import documentsListStore from '@/modules/documents/documents-list-store';
import documentsViewStore from '@/modules/documents/documents-view-store';
import documentsImporterStore from '@/modules/documents/documents-importer-store';
import documentsFormStore from '@/modules/documents/documents-form-store';
import documentsDestroyStore from '@/modules/documents/documents-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: documentsDestroyStore,
    form: documentsFormStore,
    list: documentsListStore,
    view: documentsViewStore,
    importer: documentsImporterStore,
  },
};
