import routes from '@/modules/currency/currency-routes';
import store from '@/modules/currency/currency-store';
import CurrencyAutocompleteInput from '@/modules/currency/components/currency-autocomplete-input';

export default {
  components: [CurrencyAutocompleteInput],
  routes,
  store,
};
