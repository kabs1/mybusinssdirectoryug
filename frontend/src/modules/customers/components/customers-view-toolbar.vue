<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: `/customers/${record.id}/edit` }" v-if="record && hasPermissionToEdit">
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
import { CustomersPermissions } from '@/modules/customers/customers-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

export default {
  name: 'app-customers-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      record: 'customers/view/record',
      loading: 'customers/view/loading',
      destroyLoading: 'customers/destroy/loading',
    }),

    hasPermissionToEdit() {
      return new CustomersPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new CustomersPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new CustomersPermissions(this.currentUser).destroy;
    },

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },
  },

  methods: {
    ...mapActions({
      doDestroy: 'customers/destroy/doDestroy',
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
