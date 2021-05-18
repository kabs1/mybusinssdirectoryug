import registerListStore from '@/modules/register/register-list-store';
import registerViewStore from '@/modules/register/register-view-store';
import registerImporterStore from '@/modules/register/register-importer-store';
import registerFormStore from '@/modules/register/register-form-store';
import registerDestroyStore from '@/modules/register/register-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: registerDestroyStore,
    form: registerFormStore,
    list: registerListStore,
    view: registerViewStore,
    importer: registerImporterStore,
  },
};
