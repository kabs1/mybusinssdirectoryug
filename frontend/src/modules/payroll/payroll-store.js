import payrollListStore from '@/modules/payroll/payroll-list-store';
import payrollViewStore from '@/modules/payroll/payroll-view-store';
import payrollImporterStore from '@/modules/payroll/payroll-importer-store';
import payrollFormStore from '@/modules/payroll/payroll-form-store';
import payrollDestroyStore from '@/modules/payroll/payroll-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: payrollDestroyStore,
    form: payrollFormStore,
    list: payrollListStore,
    view: payrollViewStore,
    importer: payrollImporterStore,
  },
};
