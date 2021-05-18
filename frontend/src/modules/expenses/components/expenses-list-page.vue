<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenses.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenses.list.title"></app-i18n>
      </h1>

      <app-expenses-list-toolbar></app-expenses-list-toolbar>
      <app-expenses-list-filter></app-expenses-list-filter>
      <app-expenses-list-table></app-expenses-list-table>
    </div>
  </div>
</template>

<script>
import ExpensesListFilter from '@/modules/expenses/components/expenses-list-filter.vue';
import ExpensesListTable from '@/modules/expenses/components/expenses-list-table.vue';
import ExpensesListToolbar from '@/modules/expenses/components/expenses-list-toolbar.vue';

export default {
  name: 'app-expenses-list-page',

  components: {
    [ExpensesListFilter.name]: ExpensesListFilter,
    [ExpensesListTable.name]: ExpensesListTable,
    [ExpensesListToolbar.name]: ExpensesListToolbar,
  },
};
</script>

<style>
</style>
