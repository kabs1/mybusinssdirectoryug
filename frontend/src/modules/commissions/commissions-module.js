import routes from '@/modules/commissions/commissions-routes';
import store from '@/modules/commissions/commissions-store';
import CommissionsAutocompleteInput from '@/modules/commissions/components/commissions-autocomplete-input';

export default {
  components: [CommissionsAutocompleteInput],
  routes,
  store,
};
