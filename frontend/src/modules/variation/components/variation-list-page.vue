<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.variation.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.variation.list.title"></app-i18n>
      </h1>

      <app-variation-list-toolbar></app-variation-list-toolbar>
      <app-variation-list-filter></app-variation-list-filter>
      <app-variation-list-table></app-variation-list-table>
    </div>
  </div>
</template>

<script>
import VariationListFilter from '@/modules/variation/components/variation-list-filter.vue';
import VariationListTable from '@/modules/variation/components/variation-list-table.vue';
import VariationListToolbar from '@/modules/variation/components/variation-list-toolbar.vue';

export default {
  name: 'app-variation-list-page',

  components: {
    [VariationListFilter.name]: VariationListFilter,
    [VariationListTable.name]: VariationListTable,
    [VariationListToolbar.name]: VariationListToolbar,
  },
};
</script>

<style>
</style>
