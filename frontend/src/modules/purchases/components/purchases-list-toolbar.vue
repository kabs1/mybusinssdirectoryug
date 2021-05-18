<template>
  <div class="app-page-toolbar">
<!--    <router-link :to="{ path: '/purchases/new' }" v-if="hasPermissionToCreate">-->
<!--      <el-button icon="el-icon-fa-plus" type="primary" round>-->
<!--        <app-i18n code="common.new"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

<!--    <router-link :to="{ path: '/purchases/import' }" v-if="hasPermissionToImport">-->
<!--      <el-button icon="el-icon-fa-upload" type="info" round>-->
<!--        <app-i18n code="common.import"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

    <router-link
      :to="{ path: '/audit-logs', query: { entityNames: 'purchases' } }"
      v-if="hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history" round>
        <app-i18n code="auditLog.menu"></app-i18n>
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
import { PurchasesPermissions } from '@/modules/purchases/purchases-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-purchases-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'purchases/list/hasRows',
      loading: 'purchases/list/loading',
      exportLoading: 'purchases/list/exportLoading',
      selectedRows: 'purchases/list/selectedRows',
      destroyLoading: 'purchases/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new PurchasesPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new PurchasesPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new PurchasesPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new PurchasesPermissions(this.currentUser)
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
      doExport: 'purchases/list/doExport',
      doRemoveAllSelected:
        'purchases/list/doRemoveAllSelected',
      doDisableAllSelected:
        'purchases/list/doDisableAllSelected',
      doEnableAllSelected:
        'purchases/list/doEnableAllSelected',
      doDestroyAll: 'purchases/destroy/doDestroyAll',
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
