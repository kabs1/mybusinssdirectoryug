import routes from '@/modules/register/register-routes';
import store from '@/modules/register/register-store';
import RegisterAutocompleteInput from '@/modules/register/components/register-autocomplete-input';

export default {
  components: [RegisterAutocompleteInput],
  routes,
  store,
};
