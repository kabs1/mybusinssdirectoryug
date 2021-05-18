import { CurrencyService } from '@/modules/currency/currency-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';
import { i18n } from '@/i18n';

export default {
  namespaced: true,

  state: {
    loading: false,
  },

  getters: {
    loading: (state) => !!state.loading,
  },

  mutations: {
    DESTROY_ALL_STARTED(state) {
      state.loading = true;
    },

    DESTROY_ALL_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ALL_ERROR(state) {
      state.loading = false;
    },

    DESTROY_STARTED(state) {
      state.loading = true;
    },

    DESTROY_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ERROR(state) {
      state.loading = false;
    },
  },

  actions: {
    async doDestroy({ commit, dispatch, rootGetters }, id) {
      try {
        commit('DESTROY_STARTED');

        await CurrencyService.destroyAll([id]);

        commit('DESTROY_SUCCESS');

        Message.success(i18n('entities.currency.destroy.success'));

        routerAsync().push('/currency');

        dispatch(
          `${'currency/list'}/doFetch`,
          rootGetters[`${'currency/list'}/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ERROR');
      }
    },

    async doDestroyAll(
      { commit, dispatch, rootGetters },
      ids,
    ) {
      try {
        commit('DESTROY_ALL_STARTED');

        await CurrencyService.destroyAll(ids);

        commit('DESTROY_ALL_SUCCESS');

        dispatch(`${'currency/list'}/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.currency.destroyAll.success'),
        );

        routerAsync().push('/currency');

        dispatch(
          `${'currency/list'}/doFetch`,
          rootGetters[`${'currency/list'}/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ALL_ERROR');
      }
    },
  },
};
