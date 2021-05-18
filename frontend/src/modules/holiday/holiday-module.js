import routes from '@/modules/holiday/holiday-routes';
import store from '@/modules/holiday/holiday-store';
import HolidayAutocompleteInput from '@/modules/holiday/components/holiday-autocomplete-input';

export default {
  components: [HolidayAutocompleteInput],
  routes,
  store,
};
