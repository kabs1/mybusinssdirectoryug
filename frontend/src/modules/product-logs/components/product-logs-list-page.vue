<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productLogs.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productLogs.list.title"></app-i18n>
      </h1>

      <app-product-logs-list-toolbar></app-product-logs-list-toolbar>
      <app-product-logs-list-filter></app-product-logs-list-filter>
      <app-product-logs-list-table></app-product-logs-list-table>
    </div>
  </div>
</template>

<script>
import ProductLogsListFilter from '@/modules/product-logs/components/product-logs-list-filter.vue';
import ProductLogsListTable from '@/modules/product-logs/components/product-logs-list-table.vue';
import ProductLogsListToolbar from '@/modules/product-logs/components/product-logs-list-toolbar.vue';

export default {
  name: 'app-product-logs-list-page',

  components: {
    [ProductLogsListFilter.name]: ProductLogsListFilter,
    [ProductLogsListTable.name]: ProductLogsListTable,
    [ProductLogsListToolbar.name]: ProductLogsListToolbar,
  },
};
</script>

<style>
</style>
