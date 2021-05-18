<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.damages.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.damages.list.title"></app-i18n>
      </h1>

      <app-damages-list-toolbar></app-damages-list-toolbar>
      <app-damages-list-filter></app-damages-list-filter>
      <app-damages-list-table></app-damages-list-table>
    </div>
  </div>
</template>

<script>
import DamagesListFilter from '@/modules/damages/components/damages-list-filter.vue';
import DamagesListTable from '@/modules/damages/components/damages-list-table.vue';
import DamagesListToolbar from '@/modules/damages/components/damages-list-toolbar.vue';

export default {
  name: 'app-damages-list-page',

  components: {
    [DamagesListFilter.name]: DamagesListFilter,
    [DamagesListTable.name]: DamagesListTable,
    [DamagesListToolbar.name]: DamagesListToolbar,
  },
};
</script>

<style>
</style>
