import routes from '@/modules/brands/brands-routes';
import store from '@/modules/brands/brands-store';
import BrandsAutocompleteInput from '@/modules/brands/components/brands-autocomplete-input';

export default {
  components: [BrandsAutocompleteInput],
  routes,
  store,
};
