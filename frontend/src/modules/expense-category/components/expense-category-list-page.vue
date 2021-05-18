<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenseCategory.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenseCategory.list.title"></app-i18n>
      </h1>

      <app-expense-category-list-toolbar></app-expense-category-list-toolbar>
      <app-expense-category-list-filter></app-expense-category-list-filter>
      <app-expense-category-list-table></app-expense-category-list-table>
    </div>
  </div>
</template>

<script>
import ExpenseCategoryListFilter from '@/modules/expense-category/components/expense-category-list-filter.vue';
import ExpenseCategoryListTable from '@/modules/expense-category/components/expense-category-list-table.vue';
import ExpenseCategoryListToolbar from '@/modules/expense-category/components/expense-category-list-toolbar.vue';

export default {
  name: 'app-expense-category-list-page',

  components: {
    [ExpenseCategoryListFilter.name]: ExpenseCategoryListFilter,
    [ExpenseCategoryListTable.name]: ExpenseCategoryListTable,
    [ExpenseCategoryListToolbar.name]: ExpenseCategoryListToolbar,
  },
};
</script>

<style>
</style>
