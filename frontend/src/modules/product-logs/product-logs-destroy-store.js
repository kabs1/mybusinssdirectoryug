import { ProductLogsService } from '@/modules/product-logs/product-logs-service';
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

        await ProductLogsService.destroyAll([id]);

        commit('DESTROY_SUCCESS');

        Message.success(i18n('entities.productLogs.destroy.success'));

        routerAsync().push('/product-logs');

        dispatch(
          `${'productLogs/list'}/doFetch`,
          rootGetters[`${'productLogs/list'}/filter`],
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

        await ProductLogsService.destroyAll(ids);

        commit('DESTROY_ALL_SUCCESS');

        dispatch(`${'productLogs/list'}/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.productLogs.destroyAll.success'),
        );

        routerAsync().push('/product-logs');

        dispatch(
          `${'productLogs/list'}/doFetch`,
          rootGetters[`${'productLogs/list'}/filter`],
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
