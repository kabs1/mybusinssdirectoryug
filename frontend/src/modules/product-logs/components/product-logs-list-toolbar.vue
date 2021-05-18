<template>
  <div class="app-page-toolbar">
<!--    <router-link :to="{ path: '/product-logs/new' }" v-if="hasPermissionToCreate">-->
<!--      <el-button icon="el-icon-fa-plus" type="primary" round>-->
<!--        <app-i18n code="common.new"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

<!--    <router-link-->
<!--      :to="{ path: '/audit-logs', query: { entityNames: 'productLogs' } }"-->
<!--      v-if="hasPermissionToAuditLogs"-->
<!--    >-->
<!--      <el-button icon="el-icon-fa-history" round>-->
<!--        <app-i18n code="auditLog.menu"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

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
import { ProductLogsPermissions } from '@/modules/product-logs/product-logs-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-product-logs-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'productLogs/list/hasRows',
      loading: 'productLogs/list/loading',
      exportLoading: 'productLogs/list/exportLoading',
      selectedRows: 'productLogs/list/selectedRows',
      destroyLoading: 'productLogs/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new ProductLogsPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new ProductLogsPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new ProductLogsPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new ProductLogsPermissions(this.currentUser)
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
      doExport: 'productLogs/list/doExport',
      doRemoveAllSelected:
        'productLogs/list/doRemoveAllSelected',
      doDisableAllSelected:
        'productLogs/list/doDisableAllSelected',
      doEnableAllSelected:
        'productLogs/list/doEnableAllSelected',
      doDestroyAll: 'productLogs/destroy/doDestroyAll',
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
