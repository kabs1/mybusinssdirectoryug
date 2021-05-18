import routes from '@/modules/suppliers/suppliers-routes';
import store from '@/modules/suppliers/suppliers-store';
import SuppliersAutocompleteInput from '@/modules/suppliers/components/suppliers-autocomplete-input';

export default {
  components: [SuppliersAutocompleteInput],
  routes,
  store,
};
