import stockTransferListStore from '@/modules/stock-transfer/stock-transfer-list-store';
import stockTransferViewStore from '@/modules/stock-transfer/stock-transfer-view-store';
import stockTransferImporterStore from '@/modules/stock-transfer/stock-transfer-importer-store';
import stockTransferFormStore from '@/modules/stock-transfer/stock-transfer-form-store';
import stockTransferDestroyStore from '@/modules/stock-transfer/stock-transfer-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: stockTransferDestroyStore,
    form: stockTransferFormStore,
    list: stockTransferListStore,
    view: stockTransferViewStore,
    importer: stockTransferImporterStore,
  },
};
