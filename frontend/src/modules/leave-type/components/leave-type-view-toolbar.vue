<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: `/leave-type/${record.id}/edit` }" v-if="record && hasPermissionToEdit">
      <el-button icon="el-icon-fa-edit" type="primary">
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      :disabled="destroyLoading"
      @click="doDestroyWithConfirm"
      icon="el-icon-fa-trash"
      type="primary"
      v-if="record && hasPermissionToDestroy"
    >
      <app-i18n code="common.destroy"></app-i18n>
    </el-button>

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
import { LeaveTypePermissions } from '@/modules/leave-type/leave-type-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

export default {
  name: 'app-leave-type-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      record: 'leaveType/view/record',
      loading: 'leaveType/view/loading',
      destroyLoading: 'leaveType/destroy/loading',
    }),

    hasPermissionToEdit() {
      return new LeaveTypePermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new LeaveTypePermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new LeaveTypePermissions(this.currentUser).destroy;
    },

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },
  },

  methods: {
    ...mapActions({
      doDestroy: 'leaveType/destroy/doDestroy',
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
