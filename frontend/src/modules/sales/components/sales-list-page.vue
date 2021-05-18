<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.sales.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sales.list.title"></app-i18n>
      </h1>

      <app-sales-list-toolbar></app-sales-list-toolbar>
      <app-sales-list-filter></app-sales-list-filter>
      <app-sales-list-table></app-sales-list-table>
    </div>
  </div>
</template>

<script>
import SalesListFilter from '@/modules/sales/components/sales-list-filter.vue';
import SalesListTable from '@/modules/sales/components/sales-list-table.vue';
import SalesListToolbar from '@/modules/sales/components/sales-list-toolbar.vue';

export default {
  name: 'app-sales-list-page',

  components: {
    [SalesListFilter.name]: SalesListFilter,
    [SalesListTable.name]: SalesListTable,
    [SalesListToolbar.name]: SalesListToolbar,
  },
};
</script>

<style>
</style>
