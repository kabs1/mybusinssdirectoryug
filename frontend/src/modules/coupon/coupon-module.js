import routes from '@/modules/coupon/coupon-routes';
import store from '@/modules/coupon/coupon-store';
import CouponAutocompleteInput from '@/modules/coupon/components/coupon-autocomplete-input';

export default {
  components: [CouponAutocompleteInput],
  routes,
  store,
};
