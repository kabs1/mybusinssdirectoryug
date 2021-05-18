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
        :label="fields.leaveTypeTitle.label"
        :prop="fields.leaveTypeTitle.name"
        width="200"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'leaveTypeTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.leaveTypeDetails.label"
        :prop="fields.leaveTypeDetails.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'leaveTypeDetails') }}</template>
      </el-table-column>

      <el-table-column
              :label="fields.leaveCategory.label"
              :prop="fields.leaveCategory.name"
              width="100"
              sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'leaveCategory') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/leave-type/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { LeaveTypeModel } from '@/modules/leave-type/leave-type-model';
import { mapGetters, mapActions } from 'vuex';
import { LeaveTypePermissions } from '@/modules/leave-type/leave-type-permissions';
import { i18n } from '@/i18n';

const { fields } = LeaveTypeModel;

export default {
  name: 'app-leave-type-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'leaveType/list/rows',
      count: 'leaveType/list/count',
      loading: 'leaveType/list/loading',
      pagination: 'leaveType/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'leaveType/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new LeaveTypePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new LeaveTypePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'leaveType/list/doChangeSort',
      doChangePaginationCurrentPage:
        'leaveType/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'leaveType/list/doChangePaginationPageSize',
      doMountTable: 'leaveType/list/doMountTable',
      doDestroy: 'leaveType/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return LeaveTypeModel.presenter(row, fieldName);
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
