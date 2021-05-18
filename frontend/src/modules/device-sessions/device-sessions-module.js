import routes from '@/modules/device-sessions/device-sessions-routes';
import store from '@/modules/device-sessions/device-sessions-store';
import DeviceSessionsAutocompleteInput from '@/modules/device-sessions/components/device-sessions-autocomplete-input';

export default {
  components: [DeviceSessionsAutocompleteInput],
  routes,
  store,
};
