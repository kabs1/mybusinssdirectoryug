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
        :label="fields.payrollRef.label"
        :prop="fields.payrollRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'payrollRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.payrollStaff.label" :prop="fields.payrollStaff.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.payrollStaff.label"
            :permission="fields.payrollStaff.readPermission"
            :url="fields.payrollStaff.viewUrl"
            :value="presenter(scope.row, 'payrollStaff')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.payrollSalary.label"
        :prop="fields.payrollSalary.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'payrollSalary') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.payrollWorkingType.label"
        :prop="fields.payrollWorkingType.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'payrollWorkingType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.payrollWorkingTime.label"
        :prop="fields.payrollWorkingTime.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'payrollWorkingTime') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.payrollStatus.label"
        :prop="fields.payrollStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'payrollStatus') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.payrollDate.label"
        :prop="fields.payrollDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'payrollDate') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/payroll/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/payroll/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { PayrollModel } from '@/modules/payroll/payroll-model';
import { mapGetters, mapActions } from 'vuex';
import { PayrollPermissions } from '@/modules/payroll/payroll-permissions';
import { i18n } from '@/i18n';

const { fields } = PayrollModel;

export default {
  name: 'app-payroll-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'payroll/list/rows',
      count: 'payroll/list/count',
      loading: 'payroll/list/loading',
      pagination: 'payroll/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'payroll/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new PayrollPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new PayrollPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'payroll/list/doChangeSort',
      doChangePaginationCurrentPage:
        'payroll/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'payroll/list/doChangePaginationPageSize',
      doMountTable: 'payroll/list/doMountTable',
      doDestroy: 'payroll/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return PayrollModel.presenter(row, fieldName);
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
