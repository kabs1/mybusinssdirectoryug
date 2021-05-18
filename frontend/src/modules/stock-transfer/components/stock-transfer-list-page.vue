<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockTransfer.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockTransfer.list.title"></app-i18n>
      </h1>

      <app-stock-transfer-list-toolbar></app-stock-transfer-list-toolbar>
      <app-stock-transfer-list-filter></app-stock-transfer-list-filter>
      <app-stock-transfer-list-table></app-stock-transfer-list-table>
    </div>
  </div>
</template>

<script>
import StockTransferListFilter from '@/modules/stock-transfer/components/stock-transfer-list-filter.vue';
import StockTransferListTable from '@/modules/stock-transfer/components/stock-transfer-list-table.vue';
import StockTransferListToolbar from '@/modules/stock-transfer/components/stock-transfer-list-toolbar.vue';

export default {
  name: 'app-stock-transfer-list-page',

  components: {
    [StockTransferListFilter.name]: StockTransferListFilter,
    [StockTransferListTable.name]: StockTransferListTable,
    [StockTransferListToolbar.name]: StockTransferListToolbar,
  },
};
</script>

<style>
</style>
