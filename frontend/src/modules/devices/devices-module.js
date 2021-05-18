import routes from '@/modules/devices/devices-routes';
import store from '@/modules/devices/devices-store';
import DevicesAutocompleteInput from '@/modules/devices/components/devices-autocomplete-input';

export default {
  components: [DevicesAutocompleteInput],
  routes,
  store,
};
