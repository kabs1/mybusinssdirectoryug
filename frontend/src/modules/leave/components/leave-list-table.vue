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

      <el-table-column
        :label="fields.leaveRef.label"
        :prop="fields.leaveRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'leaveRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.leaveUserId.label" :prop="fields.leaveUserId.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.leaveUserId.label"
            :permission="fields.leaveUserId.readPermission"
            :url="fields.leaveUserId.viewUrl"
            :value="presenter(scope.row, 'leaveUserId')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.leaveType.label" :prop="fields.leaveType.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.leaveType.label"
            :permission="fields.leaveType.readPermission"
            :url="fields.leaveType.viewUrl"
            :value="presenter(scope.row, 'leaveType')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.leaveStartDate.label"
        :prop="fields.leaveStartDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'leaveStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.leaveEndDate.label"
        :prop="fields.leaveEndDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'leaveEndDate') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/leave/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/leave/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="danger" icon="el-icon-delete" circle
              v-if="hasPermissionToDestroy"
            >
            </el-button>
          </div>
        </template>
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
import { LeaveModel } from '@/modules/leave/leave-model';
import { mapGetters, mapActions } from 'vuex';
import { LeavePermissions } from '@/modules/leave/leave-permissions';
import { i18n } from '@/i18n';

const { fields } = LeaveModel;

export default {
  name: 'app-leave-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'leave/list/rows',
      count: 'leave/list/count',
      loading: 'leave/list/loading',
      pagination: 'leave/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'leave/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new LeavePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new LeavePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'leave/list/doChangeSort',
      doChangePaginationCurrentPage:
        'leave/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'leave/list/doChangePaginationPageSize',
      doMountTable: 'leave/list/doMountTable',
      doDestroy: 'leave/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return LeaveModel.presenter(row, fieldName);
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
