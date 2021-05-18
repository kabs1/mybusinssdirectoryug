import routes from '@/modules/leave-type/leave-type-routes';
import store from '@/modules/leave-type/leave-type-store';
import LeaveTypeAutocompleteInput from '@/modules/leave-type/components/leave-type-autocomplete-input';

export default {
  components: [LeaveTypeAutocompleteInput],
  routes,
  store,
};
