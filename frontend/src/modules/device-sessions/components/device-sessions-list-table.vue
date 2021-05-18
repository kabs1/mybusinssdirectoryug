<template>
  <div>
    <el-table
      stripe
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column :label="fields.sessionDevice.label" :prop="fields.sessionDevice.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.sessionDevice.label"
            :permission="fields.sessionDevice.readPermission"
            :url="fields.sessionDevice.viewUrl"
            :value="presenter(scope.row, 'sessionDevice')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.sessionLoginDate.label"
        :prop="fields.sessionLoginDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'sessionLoginDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.sessionLogoutDate.label"
        :prop="fields.sessionLogoutDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'sessionLogoutDate') }}</template>
      </el-table-column>

      <el-table-column :label="fields.sessionUser.label" :prop="fields.sessionUser.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.sessionUser.label"
            :permission="fields.sessionUser.readPermission"
            :url="fields.sessionUser.viewUrl"
            :value="presenter(scope.row, 'sessionUser')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.sessionDeviceType.label"
        :prop="fields.sessionDeviceType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'sessionDeviceType') }}</template>
      </el-table-column>

    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { DeviceSessionsModel } from '@/modules/device-sessions/device-sessions-model';
import { mapGetters, mapActions } from 'vuex';
import { DeviceSessionsPermissions } from '@/modules/device-sessions/device-sessions-permissions';
import { i18n } from '@/i18n';

const { fields } = DeviceSessionsModel;

export default {
  name: 'app-device-sessions-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'deviceSessions/list/rows',
      count: 'deviceSessions/list/count',
      loading: 'deviceSessions/list/loading',
      pagination: 'deviceSessions/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'deviceSessions/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DeviceSessionsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DeviceSessionsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'deviceSessions/list/doChangeSort',
      doChangePaginationCurrentPage:
        'deviceSessions/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'deviceSessions/list/doChangePaginationPageSize',
      doMountTable: 'deviceSessions/list/doMountTable',
      doDestroy: 'deviceSessions/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DeviceSessionsModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
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

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
