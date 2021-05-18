<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.products.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.products.list.title"></app-i18n>
      </h1>

      <app-products-list-toolbar></app-products-list-toolbar>
      <app-products-list-filter></app-products-list-filter>
      <app-products-list-table></app-products-list-table>
    </div>
  </div>
</template>

<script>
import ProductsListFilter from '@/modules/products/components/products-list-filter.vue';
import ProductsListTable from '@/modules/products/components/products-list-table.vue';
import ProductsListToolbar from '@/modules/products/components/products-list-toolbar.vue';

export default {
  name: 'app-products-list-page',

  components: {
    [ProductsListFilter.name]: ProductsListFilter,
    [ProductsListTable.name]: ProductsListTable,
    [ProductsListToolbar.name]: ProductsListToolbar,
  },
};
</script>

<style>
</style>
