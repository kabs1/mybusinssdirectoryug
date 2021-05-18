import routes from '@/modules/stock-transfer/stock-transfer-routes';
import store from '@/modules/stock-transfer/stock-transfer-store';
import StockTransferAutocompleteInput from '@/modules/stock-transfer/components/stock-transfer-autocomplete-input';

export default {
  components: [StockTransferAutocompleteInput],
  routes,
  store,
};
