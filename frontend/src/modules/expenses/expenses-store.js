import expensesListStore from '@/modules/expenses/expenses-list-store';
import expensesViewStore from '@/modules/expenses/expenses-view-store';
import expensesImporterStore from '@/modules/expenses/expenses-importer-store';
import expensesFormStore from '@/modules/expenses/expenses-form-store';
import expensesDestroyStore from '@/modules/expenses/expenses-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: expensesDestroyStore,
    form: expensesFormStore,
    list: expensesListStore,
    view: expensesViewStore,
    importer: expensesImporterStore,
  },
};
