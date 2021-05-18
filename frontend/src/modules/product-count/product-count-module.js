import routes from '@/modules/product-count/product-count-routes';
import store from '@/modules/product-count/product-count-store';
import ProductCountAutocompleteInput from '@/modules/product-count/components/product-count-autocomplete-input';

export default {
  components: [ProductCountAutocompleteInput],
  routes,
  store,
};
