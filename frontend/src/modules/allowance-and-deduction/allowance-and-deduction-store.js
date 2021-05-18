import allowanceAndDeductionListStore from '@/modules/allowance-and-deduction/allowance-and-deduction-list-store';
import allowanceAndDeductionViewStore from '@/modules/allowance-and-deduction/allowance-and-deduction-view-store';
import allowanceAndDeductionImporterStore from '@/modules/allowance-and-deduction/allowance-and-deduction-importer-store';
import allowanceAndDeductionFormStore from '@/modules/allowance-and-deduction/allowance-and-deduction-form-store';
import allowanceAndDeductionDestroyStore from '@/modules/allowance-and-deduction/allowance-and-deduction-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: allowanceAndDeductionDestroyStore,
    form: allowanceAndDeductionFormStore,
    list: allowanceAndDeductionListStore,
    view: allowanceAndDeductionViewStore,
    importer: allowanceAndDeductionImporterStore,
  },
};
