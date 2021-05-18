<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.brands.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.brands.list.title"></app-i18n>
      </h1>

      <app-brands-list-toolbar></app-brands-list-toolbar>
      <app-brands-list-filter></app-brands-list-filter>
      <app-brands-list-table></app-brands-list-table>
    </div>
  </div>
</template>

<script>
import BrandsListFilter from '@/modules/brands/components/brands-list-filter.vue';
import BrandsListTable from '@/modules/brands/components/brands-list-table.vue';
import BrandsListToolbar from '@/modules/brands/components/brands-list-toolbar.vue';

export default {
  name: 'app-brands-list-page',

  components: {
    [BrandsListFilter.name]: BrandsListFilter,
    [BrandsListTable.name]: BrandsListTable,
    [BrandsListToolbar.name]: BrandsListToolbar,
  },
};
</script>

<style>
</style>
