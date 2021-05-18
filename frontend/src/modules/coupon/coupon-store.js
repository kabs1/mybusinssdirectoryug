import couponListStore from '@/modules/coupon/coupon-list-store';
import couponViewStore from '@/modules/coupon/coupon-view-store';
import couponImporterStore from '@/modules/coupon/coupon-importer-store';
import couponFormStore from '@/modules/coupon/coupon-form-store';
import couponDestroyStore from '@/modules/coupon/coupon-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: couponDestroyStore,
    form: couponFormStore,
    list: couponListStore,
    view: couponViewStore,
    importer: couponImporterStore,
  },
};
