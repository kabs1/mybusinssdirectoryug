<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.expCategoryTitle.label"
        :prop="fields.expCategoryTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'expCategoryTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.expCategoryDetails.label"
        :prop="fields.expCategoryDetails.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'expCategoryDetails') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/expense-category/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="danger" icon="el-icon-delete" circle
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
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
import { ExpenseCategoryModel } from '@/modules/expense-category/expense-category-model';
import { mapGetters, mapActions } from 'vuex';
import { ExpenseCategoryPermissions } from '@/modules/expense-category/expense-category-permissions';
import { i18n } from '@/i18n';

const { fields } = ExpenseCategoryModel;

export default {
  name: 'app-expense-category-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'expenseCategory/list/rows',
      count: 'expenseCategory/list/count',
      loading: 'expenseCategory/list/loading',
      pagination: 'expenseCategory/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'expenseCategory/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ExpenseCategoryPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ExpenseCategoryPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'expenseCategory/list/doChangeSort',
      doChangePaginationCurrentPage:
        'expenseCategory/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'expenseCategory/list/doChangePaginationPageSize',
      doMountTable: 'expenseCategory/list/doMountTable',
      doDestroy: 'expenseCategory/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ExpenseCategoryModel.presenter(row, fieldName);
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
