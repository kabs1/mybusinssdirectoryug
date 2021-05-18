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
        :label="fields.expenseCover.label"
        :prop="fields.expenseCover.name"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'expenseCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.expensesTitle.label"
        :prop="fields.expensesTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'expensesTitle') }}</template>
      </el-table-column>

      <el-table-column :label="fields.expenseMadeTo.label" :prop="fields.expenseMadeTo.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.expenseMadeTo.label"
            :permission="fields.expenseMadeTo.readPermission"
            :url="fields.expenseMadeTo.viewUrl"
            :value="presenter(scope.row, 'expenseMadeTo')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :label="fields.expensesMadeBy.label" :prop="fields.expensesMadeBy.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.expensesMadeBy.label"
            :permission="fields.expensesMadeBy.readPermission"
            :url="fields.expensesMadeBy.viewUrl"
            :value="presenter(scope.row, 'expensesMadeBy')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.expensesDate.label"
        :prop="fields.expensesDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'expensesDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.expensesStatus.label"
        :prop="fields.expensesStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'expensesStatus') }}</el-tag>
        </template>
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
            <router-link :to="`/expenses/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/expenses/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="danger" icon="el-icon-edit" circle
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
import { ExpensesModel } from '@/modules/expenses/expenses-model';
import { mapGetters, mapActions } from 'vuex';
import { ExpensesPermissions } from '@/modules/expenses/expenses-permissions';
import { i18n } from '@/i18n';

const { fields } = ExpensesModel;

export default {
  name: 'app-expenses-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'expenses/list/rows',
      count: 'expenses/list/count',
      loading: 'expenses/list/loading',
      pagination: 'expenses/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'expenses/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ExpensesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ExpensesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'expenses/list/doChangeSort',
      doChangePaginationCurrentPage:
        'expenses/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'expenses/list/doChangePaginationPageSize',
      doMountTable: 'expenses/list/doMountTable',
      doDestroy: 'expenses/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ExpensesModel.presenter(row, fieldName);
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
