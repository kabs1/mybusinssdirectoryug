import routes from '@/modules/document-types/document-types-routes';
import store from '@/modules/document-types/document-types-store';
import DocumentTypesAutocompleteInput from '@/modules/document-types/components/document-types-autocomplete-input';

export default {
  components: [DocumentTypesAutocompleteInput],
  routes,
  store,
};
