import routes from '@/modules/stock-adjustments/stock-adjustments-routes';
import store from '@/modules/stock-adjustments/stock-adjustments-store';
import StockAdjustmentsAutocompleteInput from '@/modules/stock-adjustments/components/stock-adjustments-autocomplete-input';

export default {
  components: [StockAdjustmentsAutocompleteInput],
  routes,
  store,
};
