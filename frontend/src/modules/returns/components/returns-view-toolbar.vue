<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{ path: '/audit-logs', query: { entityId: record.id } }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script>
import { ReturnsPermissions } from '@/modules/returns/returns-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

export default {
  name: 'app-returns-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      record: 'returns/view/record',
      loading: 'returns/view/loading',
      destroyLoading: 'returns/destroy/loading',
    }),

    hasPermissionToEdit() {
      return new ReturnsPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new ReturnsPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new ReturnsPermissions(this.currentUser).destroy;
    },

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },
  },

  methods: {
    ...mapActions({
      doDestroy: 'returns/destroy/doDestroy',
    }),

    async doDestroyWithConfirm() {
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

        return this.doDestroy(this.record.id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
