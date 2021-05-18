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
        :label="fields.productLogRef.label"
        :prop="fields.productLogRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.productLogProduct.label" :prop="fields.productLogProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.productLogProduct.label"
            :permission="fields.productLogProduct.readPermission"
            :url="fields.productLogProduct.viewUrl"
            :value="presenter(scope.row, 'productLogProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.productLogStall.label" :prop="fields.productLogStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.productLogStall.label"
            :permission="fields.productLogStall.readPermission"
            :url="fields.productLogStall.viewUrl"
            :value="presenter(scope.row, 'productLogStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogSellingPrice.label"
        :prop="fields.productLogSellingPrice.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogSellingPrice') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogBuyingPrice.label"
        :prop="fields.productLogBuyingPrice.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogBuyingPrice') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogCurrentStock.label"
        :prop="fields.productLogCurrentStock.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogCurrentStock') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogSoldUnits.label"
        :prop="fields.productLogSoldUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogSoldUnits') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogDamagedUnits.label"
        :prop="fields.productLogDamagedUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogDamagedUnits') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogPurchasedUnits.label"
        :prop="fields.productLogPurchasedUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogPurchasedUnits') || 0  }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productLogTransferredUnits.label"
        :prop="fields.productLogTransferredUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productLogTransferredUnits') || 0 }}</template>
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
import { ProductLogsModel } from '@/modules/product-logs/product-logs-model';
import { mapGetters, mapActions } from 'vuex';
import { ProductLogsPermissions } from '@/modules/product-logs/product-logs-permissions';
import { i18n } from '@/i18n';

const { fields } = ProductLogsModel;

export default {
  name: 'app-product-logs-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'productLogs/list/rows',
      count: 'productLogs/list/count',
      loading: 'productLogs/list/loading',
      pagination: 'productLogs/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'productLogs/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ProductLogsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ProductLogsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'productLogs/list/doChangeSort',
      doChangePaginationCurrentPage:
        'productLogs/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'productLogs/list/doChangePaginationPageSize',
      doMountTable: 'productLogs/list/doMountTable',
      doDestroy: 'productLogs/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ProductLogsModel.presenter(row, fieldName);
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
