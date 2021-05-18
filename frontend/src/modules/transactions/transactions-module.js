import routes from '@/modules/transactions/transactions-routes';
import store from '@/modules/transactions/transactions-store';
import TransactionsAutocompleteInput from '@/modules/transactions/components/transactions-autocomplete-input';

export default {
  components: [TransactionsAutocompleteInput],
  routes,
  store,
};
