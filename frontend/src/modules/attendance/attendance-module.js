import routes from '@/modules/attendance/attendance-routes';
import store from '@/modules/attendance/attendance-store';
import AttendanceAutocompleteInput from '@/modules/attendance/components/attendance-autocomplete-input';

export default {
  components: [AttendanceAutocompleteInput],
  routes,
  store,
};
