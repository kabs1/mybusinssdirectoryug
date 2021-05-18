import routes from '@/modules/damages/damages-routes';
import store from '@/modules/damages/damages-store';
import DamagesAutocompleteInput from '@/modules/damages/components/damages-autocomplete-input';

export default {
  components: [DamagesAutocompleteInput],
  routes,
  store,
};
