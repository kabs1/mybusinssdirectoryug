<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.returns.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.returns.list.title"></app-i18n>
      </h1>

      <app-returns-list-toolbar></app-returns-list-toolbar>
      <app-returns-list-filter></app-returns-list-filter>
      <app-returns-list-table></app-returns-list-table>
    </div>
  </div>
</template>

<script>
import ReturnsListFilter from '@/modules/returns/components/returns-list-filter.vue';
import ReturnsListTable from '@/modules/returns/components/returns-list-table.vue';
import ReturnsListToolbar from '@/modules/returns/components/returns-list-toolbar.vue';

export default {
  name: 'app-returns-list-page',

  components: {
    [ReturnsListFilter.name]: ReturnsListFilter,
    [ReturnsListTable.name]: ReturnsListTable,
    [ReturnsListToolbar.name]: ReturnsListToolbar,
  },
};
</script>

<style>
</style>
