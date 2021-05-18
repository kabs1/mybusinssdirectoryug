import routes from '@/modules/memos/memos-routes';
import store from '@/modules/memos/memos-store';
import MemosAutocompleteInput from '@/modules/memos/components/memos-autocomplete-input';

export default {
  components: [MemosAutocompleteInput],
  routes,
  store,
};
