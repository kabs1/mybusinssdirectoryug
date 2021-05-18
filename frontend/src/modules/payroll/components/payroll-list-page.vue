<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.payroll.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.payroll.list.title"></app-i18n>
      </h1>

      <app-payroll-list-toolbar></app-payroll-list-toolbar>
      <app-payroll-list-filter></app-payroll-list-filter>
      <app-payroll-list-table></app-payroll-list-table>
    </div>
  </div>
</template>

<script>
import PayrollListFilter from '@/modules/payroll/components/payroll-list-filter.vue';
import PayrollListTable from '@/modules/payroll/components/payroll-list-table.vue';
import PayrollListToolbar from '@/modules/payroll/components/payroll-list-toolbar.vue';

export default {
  name: 'app-payroll-list-page',

  components: {
    [PayrollListFilter.name]: PayrollListFilter,
    [PayrollListTable.name]: PayrollListTable,
    [PayrollListToolbar.name]: PayrollListToolbar,
  },
};
</script>

<style>
</style>
