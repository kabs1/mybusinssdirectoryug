import routes from '@/modules/expenses/expenses-routes';
import store from '@/modules/expenses/expenses-store';
import ExpensesAutocompleteInput from '@/modules/expenses/components/expenses-autocomplete-input';

export default {
  components: [ExpensesAutocompleteInput],
  routes,
  store,
};
