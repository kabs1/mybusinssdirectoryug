import routes from '@/modules/product-logs/product-logs-routes';
import store from '@/modules/product-logs/product-logs-store';
import ProductLogsAutocompleteInput from '@/modules/product-logs/components/product-logs-autocomplete-input';

export default {
  components: [ProductLogsAutocompleteInput],
  routes,
  store,
};
