import routes from '@/modules/leave/leave-routes';
import store from '@/modules/leave/leave-store';
import LeaveAutocompleteInput from '@/modules/leave/components/leave-autocomplete-input';

export default {
  components: [LeaveAutocompleteInput],
  routes,
  store,
};
