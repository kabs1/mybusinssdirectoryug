import routes from '@/modules/price-change/price-change-routes';
import store from '@/modules/price-change/price-change-store';
import PriceChangeAutocompleteInput from '@/modules/price-change/components/price-change-autocomplete-input';

export default {
  components: [PriceChangeAutocompleteInput],
  routes,
  store,
};
