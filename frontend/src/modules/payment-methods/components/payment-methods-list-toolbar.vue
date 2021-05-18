<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: '/payment-methods/new' }" v-if="hasPermissionToCreate">
      <el-button icon="el-icon-fa-plus" type="primary" round>
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>

    <router-link :to="{ path: '/payment-methods/import' }" v-if="hasPermissionToImport">
      <el-button icon="el-icon-fa-upload" type="info" round>
        <app-i18n code="common.import"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip :content="exportButtonTooltip" :disabled="!exportButtonTooltip">
      <span>
        <el-button
          :disabled="exportButtonDisabled"
          @click="doExport()"
          round
          icon="el-icon-fa-file-excel-o"
        >
          <app-i18n code="common.export"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>
  </div>
</template>

<script>
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { PaymentMethodsPermissions } from '@/modules/payment-methods/payment-methods-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-payment-methods-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'paymentMethods/list/hasRows',
      loading: 'paymentMethods/list/loading',
      exportLoading: 'paymentMethods/list/exportLoading',
      selectedRows: 'paymentMethods/list/selectedRows',
      destroyLoading: 'paymentMethods/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new PaymentMethodsPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new PaymentMethodsPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new PaymentMethodsPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new PaymentMethodsPermissions(this.currentUser)
        .destroy;
    },

    exportButtonDisabled() {
      return (
        !this.hasRows || this.loading || this.exportLoading
      );
    },

    exportButtonTooltip() {
      return !this.hasRows
        ? i18n('common.noDataToExport')
        : null;
    },

    removeButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    removeButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    enableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    enableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    disableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    disableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    destroyButtonDisabled() {
      return (
        !this.selectedRows.length ||
        this.loading ||
        this.destroyLoading
      );
    },

    destroyButtonTooltip() {
      if (!this.selectedRows.length || this.loading) {
        return i18n('common.mustSelectARow');
      }

      return null;
    },
  },

  methods: {
    ...mapActions({
      doExport: 'paymentMethods/list/doExport',
      doRemoveAllSelected:
        'paymentMethods/list/doRemoveAllSelected',
      doDisableAllSelected:
        'paymentMethods/list/doDisableAllSelected',
      doEnableAllSelected:
        'paymentMethods/list/doEnableAllSelected',
      doDestroyAll: 'paymentMethods/destroy/doDestroyAll',
    }),

    async doDestroyAllSelected() {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroyAll(
          this.selectedRows.map((item) => item.id),
        );
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
