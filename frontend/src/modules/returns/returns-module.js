import routes from '@/modules/returns/returns-routes';
import store from '@/modules/returns/returns-store';
import ReturnsAutocompleteInput from '@/modules/returns/components/returns-autocomplete-input';

export default {
  components: [ReturnsAutocompleteInput],
  routes,
  store,
};
