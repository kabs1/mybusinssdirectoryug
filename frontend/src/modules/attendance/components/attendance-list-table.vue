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
        :label="fields.attendanceRef.label"
        :prop="fields.attendanceRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'attendanceRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.attendanceStaff.label" :prop="fields.attendanceStaff.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.attendanceStaff.label"
            :permission="fields.attendanceStaff.readPermission"
            :url="fields.attendanceStaff.viewUrl"
            :value="presenter(scope.row, 'attendanceStaff')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.attendanceClockIn.label"
        :prop="fields.attendanceClockIn.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'attendanceClockIn') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.attendanceClockOut.label"
        :prop="fields.attendanceClockOut.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'attendanceClockOut') }}</template>
      </el-table-column>

      <el-table-column :label="fields.expenseStall.label" :prop="fields.expenseStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.expenseStall.label"
            :permission="fields.expenseStall.readPermission"
            :url="fields.expenseStall.viewUrl"
            :value="presenter(scope.row, 'expenseStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/attendance/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/attendance/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { AttendanceModel } from '@/modules/attendance/attendance-model';
import { mapGetters, mapActions } from 'vuex';
import { AttendancePermissions } from '@/modules/attendance/attendance-permissions';
import { i18n } from '@/i18n';

const { fields } = AttendanceModel;

export default {
  name: 'app-attendance-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'attendance/list/rows',
      count: 'attendance/list/count',
      loading: 'attendance/list/loading',
      pagination: 'attendance/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'attendance/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AttendancePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new AttendancePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'attendance/list/doChangeSort',
      doChangePaginationCurrentPage:
        'attendance/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'attendance/list/doChangePaginationPageSize',
      doMountTable: 'attendance/list/doMountTable',
      doDestroy: 'attendance/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AttendanceModel.presenter(row, fieldName);
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
