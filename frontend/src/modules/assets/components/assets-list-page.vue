<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.assets.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.assets.list.title"></app-i18n>
      </h1>

      <app-assets-list-toolbar></app-assets-list-toolbar>
      <app-assets-list-filter></app-assets-list-filter>
      <app-assets-list-table></app-assets-list-table>
    </div>
  </div>
</template>

<script>
import AssetsListFilter from '@/modules/assets/components/assets-list-filter.vue';
import AssetsListTable from '@/modules/assets/components/assets-list-table.vue';
import AssetsListToolbar from '@/modules/assets/components/assets-list-toolbar.vue';

export default {
  name: 'app-assets-list-page',

  components: {
    [AssetsListFilter.name]: AssetsListFilter,
    [AssetsListTable.name]: AssetsListTable,
    [AssetsListToolbar.name]: AssetsListToolbar,
  },
};
</script>

<style>
</style>
