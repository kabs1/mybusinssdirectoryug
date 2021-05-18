import routes from '@/modules/allowance-and-deduction/allowance-and-deduction-routes';
import store from '@/modules/allowance-and-deduction/allowance-and-deduction-store';
import AllowanceAndDeductionAutocompleteInput from '@/modules/allowance-and-deduction/components/allowance-and-deduction-autocomplete-input';

export default {
  components: [AllowanceAndDeductionAutocompleteInput],
  routes,
  store,
};
