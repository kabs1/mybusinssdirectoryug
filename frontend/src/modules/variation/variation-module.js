import routes from '@/modules/variation/variation-routes';
import store from '@/modules/variation/variation-store';
import VariationAutocompleteInput from '@/modules/variation/components/variation-autocomplete-input';

export default {
  components: [VariationAutocompleteInput],
  routes,
  store,
};
