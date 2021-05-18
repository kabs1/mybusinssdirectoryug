import todoListStore from '@/modules/todo/todo-list-store';
import todoViewStore from '@/modules/todo/todo-view-store';
import todoImporterStore from '@/modules/todo/todo-importer-store';
import todoFormStore from '@/modules/todo/todo-form-store';
import todoDestroyStore from '@/modules/todo/todo-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: todoDestroyStore,
    form: todoFormStore,
    list: todoListStore,
    view: todoViewStore,
    importer: todoImporterStore,
  },
};
