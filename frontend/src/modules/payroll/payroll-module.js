import routes from '@/modules/payroll/payroll-routes';
import store from '@/modules/payroll/payroll-store';
import PayrollAutocompleteInput from '@/modules/payroll/components/payroll-autocomplete-input';

export default {
  components: [PayrollAutocompleteInput],
  routes,
  store,
};
