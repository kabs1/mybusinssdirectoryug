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
        :label="fields.transactionRef.label"
        :prop="fields.transactionRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transactionRef') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.transactionClass.label"
        :prop="fields.transactionClass.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transactionClass') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.transactionType.label"
        :prop="fields.transactionType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transactionType') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.transactionValue.label"
        :prop="fields.transactionValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transactionValue') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.transactionIdentifier.label"
        :prop="fields.transactionIdentifier.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transactionIdentifier') }}</template>
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
import { TransactionsModel } from '@/modules/transactions/transactions-model';
import { mapGetters, mapActions } from 'vuex';
import { TransactionsPermissions } from '@/modules/transactions/transactions-permissions';
import { i18n } from '@/i18n';

const { fields } = TransactionsModel;

export default {
  name: 'app-transactions-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'transactions/list/rows',
      count: 'transactions/list/count',
      loading: 'transactions/list/loading',
      pagination: 'transactions/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'transactions/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new TransactionsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new TransactionsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'transactions/list/doChangeSort',
      doChangePaginationCurrentPage:
        'transactions/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'transactions/list/doChangePaginationPageSize',
      doMountTable: 'transactions/list/doMountTable',
      doDestroy: 'transactions/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return TransactionsModel.presenter(row, fieldName);
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
