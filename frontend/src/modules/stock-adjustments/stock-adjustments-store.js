import stockAdjustmentsListStore from '@/modules/stock-adjustments/stock-adjustments-list-store';
import stockAdjustmentsViewStore from '@/modules/stock-adjustments/stock-adjustments-view-store';
import stockAdjustmentsImporterStore from '@/modules/stock-adjustments/stock-adjustments-importer-store';
import stockAdjustmentsFormStore from '@/modules/stock-adjustments/stock-adjustments-form-store';
import stockAdjustmentsDestroyStore from '@/modules/stock-adjustments/stock-adjustments-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: stockAdjustmentsDestroyStore,
    form: stockAdjustmentsFormStore,
    list: stockAdjustmentsListStore,
    view: stockAdjustmentsViewStore,
    importer: stockAdjustmentsImporterStore,
  },
};
