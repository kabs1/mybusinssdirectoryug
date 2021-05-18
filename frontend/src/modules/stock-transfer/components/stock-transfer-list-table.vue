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
        :label="fields.transferRef.label"
        :prop="fields.transferRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transferRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.transferProduct.label" :prop="fields.transferProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.transferProduct.label"
            :permission="fields.transferProduct.readPermission"
            :url="fields.transferProduct.viewUrl"
            :value="presenter(scope.row, 'transferProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.transferStallFrom.label" :prop="fields.transferStallFrom.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.transferStallFrom.label"
            :permission="fields.transferStallFrom.readPermission"
            :url="fields.transferStallFrom.viewUrl"
            :value="presenter(scope.row, 'transferStallFrom')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.transferStallTo.label" :prop="fields.transferStallTo.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.transferStallTo.label"
            :permission="fields.transferStallTo.readPermission"
            :url="fields.transferStallTo.viewUrl"
            :value="presenter(scope.row, 'transferStallTo')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.transferUnits.label"
        :prop="fields.transferUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'transferUnits') }}</template>
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
import { StockTransferModel } from '@/modules/stock-transfer/stock-transfer-model';
import { mapGetters, mapActions } from 'vuex';
import { StockTransferPermissions } from '@/modules/stock-transfer/stock-transfer-permissions';
import { i18n } from '@/i18n';

const { fields } = StockTransferModel;

export default {
  name: 'app-stock-transfer-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'stockTransfer/list/rows',
      count: 'stockTransfer/list/count',
      loading: 'stockTransfer/list/loading',
      pagination: 'stockTransfer/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'stockTransfer/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new StockTransferPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new StockTransferPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'stockTransfer/list/doChangeSort',
      doChangePaginationCurrentPage:
        'stockTransfer/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'stockTransfer/list/doChangePaginationPageSize',
      doMountTable: 'stockTransfer/list/doMountTable',
      doDestroy: 'stockTransfer/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return StockTransferModel.presenter(row, fieldName);
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
