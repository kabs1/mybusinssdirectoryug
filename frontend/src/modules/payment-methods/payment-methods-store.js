import paymentMethodsListStore from '@/modules/payment-methods/payment-methods-list-store';
import paymentMethodsViewStore from '@/modules/payment-methods/payment-methods-view-store';
import paymentMethodsImporterStore from '@/modules/payment-methods/payment-methods-importer-store';
import paymentMethodsFormStore from '@/modules/payment-methods/payment-methods-form-store';
import paymentMethodsDestroyStore from '@/modules/payment-methods/payment-methods-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: paymentMethodsDestroyStore,
    form: paymentMethodsFormStore,
    list: paymentMethodsListStore,
    view: paymentMethodsViewStore,
    importer: paymentMethodsImporterStore,
  },
};
