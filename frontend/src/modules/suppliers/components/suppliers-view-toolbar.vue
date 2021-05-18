<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: `/suppliers/${record.id}/edit` }" v-if="record && hasPermissionToEdit">
      <el-button icon="el-icon-fa-edit" type="primary" round>
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      :disabled="destroyLoading"
      @click="doDestroyWithConfirm"
      icon="el-icon-fa-trash"
      type="danger"
      round
      v-if="record && hasPermissionToDestroy"
    >
      <app-i18n code="common.destroy"></app-i18n>
    </el-button>

    <router-link
      :to="{ path: '/audit-logs', query: { entityId: record.id } }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history" round>
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script>
import { SuppliersPermissions } from '@/modules/suppliers/suppliers-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

export default {
  name: 'app-suppliers-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      record: 'suppliers/view/record',
      loading: 'suppliers/view/loading',
      destroyLoading: 'suppliers/destroy/loading',
    }),

    hasPermissionToEdit() {
      return new SuppliersPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new SuppliersPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new SuppliersPermissions(this.currentUser).destroy;
    },

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },
  },

  methods: {
    ...mapActions({
      doDestroy: 'suppliers/destroy/doDestroy',
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
