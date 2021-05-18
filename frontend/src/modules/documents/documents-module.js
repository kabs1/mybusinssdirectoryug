import routes from '@/modules/documents/documents-routes';
import store from '@/modules/documents/documents-store';
import DocumentsAutocompleteInput from '@/modules/documents/components/documents-autocomplete-input';

export default {
  components: [DocumentsAutocompleteInput],
  routes,
  store,
};
