import currencyListStore from '@/modules/currency/currency-list-store';
import currencyViewStore from '@/modules/currency/currency-view-store';
import currencyImporterStore from '@/modules/currency/currency-importer-store';
import currencyFormStore from '@/modules/currency/currency-form-store';
import currencyDestroyStore from '@/modules/currency/currency-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: currencyDestroyStore,
    form: currencyFormStore,
    list: currencyListStore,
    view: currencyViewStore,
    importer: currencyImporterStore,
  },
};
