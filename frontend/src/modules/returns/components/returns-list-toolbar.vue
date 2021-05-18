<template>
  <div class="app-page-toolbar">
<!--    <router-link :to="{ path: '/returns/new' }" v-if="hasPermissionToCreate">-->
<!--      <el-button icon="el-icon-fa-plus" type="primary" round>-->
<!--        <app-i18n code="common.new"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

<!--    <router-link :to="{ path: '/returns/import' }" v-if="hasPermissionToImport">-->
<!--      <el-button icon="el-icon-fa-upload" type="info" round>-->
<!--        <app-i18n code="common.import"></app-i18n>-->
<!--      </el-button>-->
<!--    </router-link>-->

    <router-link
      :to="{ path: '/audit-logs', query: { entityNames: 'returns' } }"
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
import { ReturnsPermissions } from '@/modules/returns/returns-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-returns-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'returns/list/hasRows',
      loading: 'returns/list/loading',
      exportLoading: 'returns/list/exportLoading',
      selectedRows: 'returns/list/selectedRows',
      destroyLoading: 'returns/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new ReturnsPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new ReturnsPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new ReturnsPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new ReturnsPermissions(this.currentUser)
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
      doExport: 'returns/list/doExport',
      doRemoveAllSelected:
        'returns/list/doRemoveAllSelected',
      doDisableAllSelected:
        'returns/list/doDisableAllSelected',
      doEnableAllSelected:
        'returns/list/doEnableAllSelected',
      doDestroyAll: 'returns/destroy/doDestroyAll',
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
