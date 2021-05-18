import routes from '@/modules/payment-methods/payment-methods-routes';
import store from '@/modules/payment-methods/payment-methods-store';
import PaymentMethodsAutocompleteInput from '@/modules/payment-methods/components/payment-methods-autocomplete-input';

export default {
  components: [PaymentMethodsAutocompleteInput],
  routes,
  store,
};
