import routes from '@/modules/product-value/product-value-routes';
import store from '@/modules/product-value/product-value-store';
import ProductValueAutocompleteInput from '@/modules/product-value/components/product-value-autocomplete-input';

export default {
  components: [ProductValueAutocompleteInput],
  routes,
  store,
};
