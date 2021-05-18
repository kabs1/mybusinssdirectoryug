import routes from '@/modules/purchases/purchases-routes';
import store from '@/modules/purchases/purchases-store';
import PurchasesAutocompleteInput from '@/modules/purchases/components/purchases-autocomplete-input';

export default {
  components: [PurchasesAutocompleteInput],
  routes,
  store,
};
