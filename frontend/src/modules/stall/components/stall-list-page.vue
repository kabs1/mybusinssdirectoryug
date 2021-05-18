<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stall.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stall.list.title"></app-i18n>
      </h1>

      <app-stall-list-toolbar></app-stall-list-toolbar>
      <app-stall-list-filter></app-stall-list-filter>
      <app-stall-list-table></app-stall-list-table>
    </div>
  </div>
</template>

<script>
import StallListFilter from '@/modules/stall/components/stall-list-filter.vue';
import StallListTable from '@/modules/stall/components/stall-list-table.vue';
import StallListToolbar from '@/modules/stall/components/stall-list-toolbar.vue';

export default {
  name: 'app-stall-list-page',

  components: {
    [StallListFilter.name]: StallListFilter,
    [StallListTable.name]: StallListTable,
    [StallListToolbar.name]: StallListToolbar,
  },
};
</script>

<style>
</style>
