<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productValue.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productValue.list.title"></app-i18n>
      </h1>

      <app-product-value-list-toolbar></app-product-value-list-toolbar>
      <app-product-value-list-filter></app-product-value-list-filter>
      <app-product-value-list-table></app-product-value-list-table>
    </div>
  </div>
</template>

<script>
import ProductValueListFilter from '@/modules/product-value/components/product-value-list-filter.vue';
import ProductValueListTable from '@/modules/product-value/components/product-value-list-table.vue';
import ProductValueListToolbar from '@/modules/product-value/components/product-value-list-toolbar.vue';

export default {
  name: 'app-product-value-list-page',

  components: {
    [ProductValueListFilter.name]: ProductValueListFilter,
    [ProductValueListTable.name]: ProductValueListTable,
    [ProductValueListToolbar.name]: ProductValueListToolbar,
  },
};
</script>

<style>
</style>
