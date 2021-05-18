import memosListStore from '@/modules/memos/memos-list-store';
import memosViewStore from '@/modules/memos/memos-view-store';
import memosImporterStore from '@/modules/memos/memos-importer-store';
import memosFormStore from '@/modules/memos/memos-form-store';
import memosDestroyStore from '@/modules/memos/memos-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: memosDestroyStore,
    form: memosFormStore,
    list: memosListStore,
    view: memosViewStore,
    importer: memosImporterStore,
  },
};
