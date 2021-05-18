import routes from '@/modules/categories/categories-routes';
import store from '@/modules/categories/categories-store';
import CategoriesAutocompleteInput from '@/modules/categories/components/categories-autocomplete-input';

export default {
  components: [CategoriesAutocompleteInput],
  routes,
  store,
};
