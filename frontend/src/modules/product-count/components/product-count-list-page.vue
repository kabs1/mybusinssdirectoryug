<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productCount.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productCount.list.title"></app-i18n>
      </h1>

      <app-product-count-list-toolbar></app-product-count-list-toolbar>
      <app-product-count-list-filter></app-product-count-list-filter>
      <app-product-count-list-table></app-product-count-list-table>
    </div>
  </div>
</template>

<script>
import ProductCountListFilter from '@/modules/product-count/components/product-count-list-filter.vue';
import ProductCountListTable from '@/modules/product-count/components/product-count-list-table.vue';
import ProductCountListToolbar from '@/modules/product-count/components/product-count-list-toolbar.vue';

export default {
  name: 'app-product-count-list-page',

  components: {
    [ProductCountListFilter.name]: ProductCountListFilter,
    [ProductCountListTable.name]: ProductCountListTable,
    [ProductCountListToolbar.name]: ProductCountListToolbar,
  },
};
</script>

<style>
</style>
