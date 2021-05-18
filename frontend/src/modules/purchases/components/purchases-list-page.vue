<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.purchases.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.purchases.list.title"></app-i18n>
      </h1>

      <app-purchases-list-toolbar></app-purchases-list-toolbar>
      <app-purchases-list-filter></app-purchases-list-filter>
      <app-purchases-list-table></app-purchases-list-table>
    </div>
  </div>
</template>

<script>
import PurchasesListFilter from '@/modules/purchases/components/purchases-list-filter.vue';
import PurchasesListTable from '@/modules/purchases/components/purchases-list-table.vue';
import PurchasesListToolbar from '@/modules/purchases/components/purchases-list-toolbar.vue';

export default {
  name: 'app-purchases-list-page',

  components: {
    [PurchasesListFilter.name]: PurchasesListFilter,
    [PurchasesListTable.name]: PurchasesListTable,
    [PurchasesListToolbar.name]: PurchasesListToolbar,
  },
};
</script>

<style>
</style>
