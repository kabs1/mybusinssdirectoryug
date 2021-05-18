import giftCardListStore from '@/modules/gift-card/gift-card-list-store';
import giftCardViewStore from '@/modules/gift-card/gift-card-view-store';
import giftCardImporterStore from '@/modules/gift-card/gift-card-importer-store';
import giftCardFormStore from '@/modules/gift-card/gift-card-form-store';
import giftCardDestroyStore from '@/modules/gift-card/gift-card-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: giftCardDestroyStore,
    form: giftCardFormStore,
    list: giftCardListStore,
    view: giftCardViewStore,
    importer: giftCardImporterStore,
  },
};
