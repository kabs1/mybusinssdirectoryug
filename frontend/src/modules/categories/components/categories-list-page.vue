<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.categories.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.categories.list.title"></app-i18n>
      </h1>

      <app-categories-list-toolbar></app-categories-list-toolbar>
      <app-categories-list-filter></app-categories-list-filter>
      <app-categories-list-table></app-categories-list-table>
    </div>
  </div>
</template>

<script>
import CategoriesListFilter from '@/modules/categories/components/categories-list-filter.vue';
import CategoriesListTable from '@/modules/categories/components/categories-list-table.vue';
import CategoriesListToolbar from '@/modules/categories/components/categories-list-toolbar.vue';

export default {
  name: 'app-categories-list-page',

  components: {
    [CategoriesListFilter.name]: CategoriesListFilter,
    [CategoriesListTable.name]: CategoriesListTable,
    [CategoriesListToolbar.name]: CategoriesListToolbar,
  },
};
</script>

<style>
</style>
