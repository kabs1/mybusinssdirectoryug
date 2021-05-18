<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockAdjustments.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockAdjustments.list.title"></app-i18n>
      </h1>

      <app-stock-adjustments-list-toolbar></app-stock-adjustments-list-toolbar>
      <app-stock-adjustments-list-filter></app-stock-adjustments-list-filter>
      <app-stock-adjustments-list-table></app-stock-adjustments-list-table>
    </div>
  </div>
</template>

<script>
import StockAdjustmentsListFilter from '@/modules/stock-adjustments/components/stock-adjustments-list-filter.vue';
import StockAdjustmentsListTable from '@/modules/stock-adjustments/components/stock-adjustments-list-table.vue';
import StockAdjustmentsListToolbar from '@/modules/stock-adjustments/components/stock-adjustments-list-toolbar.vue';

export default {
  name: 'app-stock-adjustments-list-page',

  components: {
    [StockAdjustmentsListFilter.name]: StockAdjustmentsListFilter,
    [StockAdjustmentsListTable.name]: StockAdjustmentsListTable,
    [StockAdjustmentsListToolbar.name]: StockAdjustmentsListToolbar,
  },
};
</script>

<style>
</style>
