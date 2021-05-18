import productLogsListStore from '@/modules/product-logs/product-logs-list-store';
import productLogsViewStore from '@/modules/product-logs/product-logs-view-store';
import productLogsImporterStore from '@/modules/product-logs/product-logs-importer-store';
import productLogsFormStore from '@/modules/product-logs/product-logs-form-store';
import productLogsDestroyStore from '@/modules/product-logs/product-logs-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: productLogsDestroyStore,
    form: productLogsFormStore,
    list: productLogsListStore,
    view: productLogsViewStore,
    importer: productLogsImporterStore,
  },
};
