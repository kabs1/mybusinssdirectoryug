<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.commissions.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.commissions.list.title"></app-i18n>
      </h1>

      <app-commissions-list-toolbar></app-commissions-list-toolbar>
      <app-commissions-list-filter></app-commissions-list-filter>
      <app-commissions-list-table></app-commissions-list-table>
    </div>
  </div>
</template>

<script>
import CommissionsListFilter from '@/modules/commissions/components/commissions-list-filter.vue';
import CommissionsListTable from '@/modules/commissions/components/commissions-list-table.vue';
import CommissionsListToolbar from '@/modules/commissions/components/commissions-list-toolbar.vue';

export default {
  name: 'app-commissions-list-page',

  components: {
    [CommissionsListFilter.name]: CommissionsListFilter,
    [CommissionsListTable.name]: CommissionsListTable,
    [CommissionsListToolbar.name]: CommissionsListToolbar,
  },
};
</script>

<style>
</style>
