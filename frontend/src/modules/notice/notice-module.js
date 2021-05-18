import routes from '@/modules/notice/notice-routes';
import store from '@/modules/notice/notice-store';
import NoticeAutocompleteInput from '@/modules/notice/components/notice-autocomplete-input';

export default {
  components: [NoticeAutocompleteInput],
  routes,
  store,
};
