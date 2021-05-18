import routes from '@/modules/expense-category/expense-category-routes';
import store from '@/modules/expense-category/expense-category-store';
import ExpenseCategoryAutocompleteInput from '@/modules/expense-category/components/expense-category-autocomplete-input';

export default {
  components: [ExpenseCategoryAutocompleteInput],
  routes,
  store,
};
