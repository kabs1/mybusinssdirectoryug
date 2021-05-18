import routes from '@/modules/sales/sales-routes';
import store from '@/modules/sales/sales-store';
import SalesAutocompleteInput from '@/modules/sales/components/sales-autocomplete-input';

export default {
  components: [SalesAutocompleteInput],
  routes,
  store,
};
