import transactionsListStore from '@/modules/transactions/transactions-list-store';
import transactionsViewStore from '@/modules/transactions/transactions-view-store';
import transactionsImporterStore from '@/modules/transactions/transactions-importer-store';
import transactionsFormStore from '@/modules/transactions/transactions-form-store';
import transactionsDestroyStore from '@/modules/transactions/transactions-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: transactionsDestroyStore,
    form: transactionsFormStore,
    list: transactionsListStore,
    view: transactionsViewStore,
    importer: transactionsImporterStore,
  },
};
