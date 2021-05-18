<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.suppliers.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.suppliers.list.title"></app-i18n>
      </h1>

      <app-suppliers-list-toolbar></app-suppliers-list-toolbar>
      <app-suppliers-list-filter></app-suppliers-list-filter>
      <app-suppliers-list-table></app-suppliers-list-table>
    </div>
  </div>
</template>

<script>
import SuppliersListFilter from '@/modules/suppliers/components/suppliers-list-filter.vue';
import SuppliersListTable from '@/modules/suppliers/components/suppliers-list-table.vue';
import SuppliersListToolbar from '@/modules/suppliers/components/suppliers-list-toolbar.vue';

export default {
  name: 'app-suppliers-list-page',

  components: {
    [SuppliersListFilter.name]: SuppliersListFilter,
    [SuppliersListTable.name]: SuppliersListTable,
    [SuppliersListToolbar.name]: SuppliersListToolbar,
  },
};
</script>

<style>
</style>
