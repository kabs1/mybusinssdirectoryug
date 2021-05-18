import routes from '@/modules/products/products-routes';
import store from '@/modules/products/products-store';
import ProductsAutocompleteInput from '@/modules/products/components/products-autocomplete-input';

export default {
  components: [ProductsAutocompleteInput],
  routes,
  store,
};
