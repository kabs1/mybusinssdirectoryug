import routes from '@/modules/tax-class/tax-class-routes';
import store from '@/modules/tax-class/tax-class-store';
import TaxClassAutocompleteInput from '@/modules/tax-class/components/tax-class-autocomplete-input';

export default {
  components: [TaxClassAutocompleteInput],
  routes,
  store,
};
