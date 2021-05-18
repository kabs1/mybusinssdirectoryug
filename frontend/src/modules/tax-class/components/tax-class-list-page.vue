<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.taxClass.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.taxClass.list.title"></app-i18n>
      </h1>

      <app-tax-class-list-toolbar></app-tax-class-list-toolbar>
      <app-tax-class-list-filter></app-tax-class-list-filter>
      <app-tax-class-list-table></app-tax-class-list-table>
    </div>
  </div>
</template>

<script>
import TaxClassListFilter from '@/modules/tax-class/components/tax-class-list-filter.vue';
import TaxClassListTable from '@/modules/tax-class/components/tax-class-list-table.vue';
import TaxClassListToolbar from '@/modules/tax-class/components/tax-class-list-toolbar.vue';

export default {
  name: 'app-tax-class-list-page',

  components: {
    [TaxClassListFilter.name]: TaxClassListFilter,
    [TaxClassListTable.name]: TaxClassListTable,
    [TaxClassListToolbar.name]: TaxClassListToolbar,
  },
};
</script>

<style>
</style>
