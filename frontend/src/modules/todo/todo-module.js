import routes from '@/modules/todo/todo-routes';
import store from '@/modules/todo/todo-store';
import TodoAutocompleteInput from '@/modules/todo/components/todo-autocomplete-input';

export default {
  components: [TodoAutocompleteInput],
  routes,
  store,
};
