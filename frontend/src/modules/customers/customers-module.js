import routes from '@/modules/customers/customers-routes';
import store from '@/modules/customers/customers-store';
import CustomersAutocompleteInput from '@/modules/customers/components/customers-autocomplete-input';

export default {
  components: [CustomersAutocompleteInput],
  routes,
  store,
};
