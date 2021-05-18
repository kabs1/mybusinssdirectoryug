<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: '/suppliers/new' }" v-if="hasPermissionToCreate">
      <el-button icon="el-icon-fa-plus" type="primary" round>
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>

    <router-link :to="{ path: '/suppliers/import' }" v-if="hasPermissionToImport">
      <el-button icon="el-icon-fa-upload" type="info" round>
        <app-i18n code="common.import"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip
      :content="destroyButtonTooltip"
      :disabled="!destroyButtonTooltip"
      v-if="hasPermissionToDestroy"
    >
      <span>
        <el-button
          :disabled="destroyButtonDisabled"
          @click="doDestroyAllSelected"
          round
          icon="el-icon-fa-trash"
          type="danger"
        >
          <app-i18n code="common.destroy"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <router-link
      :to="{ path: '/audit-logs', query: { entityNames: 'suppliers' } }"
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
import { SuppliersPermissions } from '@/modules/suppliers/suppliers-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-suppliers-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'suppliers/list/hasRows',
      loading: 'suppliers/list/loading',
      exportLoading: 'suppliers/list/exportLoading',
      selectedRows: 'suppliers/list/selectedRows',
      destroyLoading: 'suppliers/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new SuppliersPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new SuppliersPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new SuppliersPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new SuppliersPermissions(this.currentUser)
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
      doExport: 'suppliers/list/doExport',
      doRemoveAllSelected:
        'suppliers/list/doRemoveAllSelected',
      doDisableAllSelected:
        'suppliers/list/doDisableAllSelected',
      doEnableAllSelected:
        'suppliers/list/doEnableAllSelected',
      doDestroyAll: 'suppliers/destroy/doDestroyAll',
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
