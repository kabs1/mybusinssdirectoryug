import routes from '@/modules/gift-card/gift-card-routes';
import store from '@/modules/gift-card/gift-card-store';
import GiftCardAutocompleteInput from '@/modules/gift-card/components/gift-card-autocomplete-input';

export default {
  components: [GiftCardAutocompleteInput],
  routes,
  store,
};
