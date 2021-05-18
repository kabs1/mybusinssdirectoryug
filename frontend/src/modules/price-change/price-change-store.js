import priceChangeListStore from '@/modules/price-change/price-change-list-store';
import priceChangeViewStore from '@/modules/price-change/price-change-view-store';
import priceChangeImporterStore from '@/modules/price-change/price-change-importer-store';
import priceChangeFormStore from '@/modules/price-change/price-change-form-store';
import priceChangeDestroyStore from '@/modules/price-change/price-change-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: priceChangeDestroyStore,
    form: priceChangeFormStore,
    list: priceChangeListStore,
    view: priceChangeViewStore,
    importer: priceChangeImporterStore,
  },
};
