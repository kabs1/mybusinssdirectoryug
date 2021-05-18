<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.units.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.units.list.title"></app-i18n>
      </h1>

      <app-units-list-toolbar></app-units-list-toolbar>
      <app-units-list-filter></app-units-list-filter>
      <app-units-list-table></app-units-list-table>
    </div>
  </div>
</template>

<script>
import UnitsListFilter from '@/modules/units/components/units-list-filter.vue';
import UnitsListTable from '@/modules/units/components/units-list-table.vue';
import UnitsListToolbar from '@/modules/units/components/units-list-toolbar.vue';

export default {
  name: 'app-units-list-page',

  components: {
    [UnitsListFilter.name]: UnitsListFilter,
    [UnitsListTable.name]: UnitsListTable,
    [UnitsListToolbar.name]: UnitsListToolbar,
  },
};
</script>

<style>
</style>
