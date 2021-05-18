import expenseCategoryListStore from '@/modules/expense-category/expense-category-list-store';
import expenseCategoryViewStore from '@/modules/expense-category/expense-category-view-store';
import expenseCategoryImporterStore from '@/modules/expense-category/expense-category-importer-store';
import expenseCategoryFormStore from '@/modules/expense-category/expense-category-form-store';
import expenseCategoryDestroyStore from '@/modules/expense-category/expense-category-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: expenseCategoryDestroyStore,
    form: expenseCategoryFormStore,
    list: expenseCategoryListStore,
    view: expenseCategoryViewStore,
    importer: expenseCategoryImporterStore,
  },
};
