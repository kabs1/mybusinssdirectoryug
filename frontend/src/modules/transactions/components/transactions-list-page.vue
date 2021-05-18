<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.transactions.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.transactions.list.title"></app-i18n>
      </h1>

      <app-transactions-list-toolbar></app-transactions-list-toolbar>
      <app-transactions-list-filter></app-transactions-list-filter>
      <app-transactions-list-table></app-transactions-list-table>
    </div>
  </div>
</template>

<script>
import TransactionsListFilter from '@/modules/transactions/components/transactions-list-filter.vue';
import TransactionsListTable from '@/modules/transactions/components/transactions-list-table.vue';
import TransactionsListToolbar from '@/modules/transactions/components/transactions-list-toolbar.vue';

export default {
  name: 'app-transactions-list-page',

  components: {
    [TransactionsListFilter.name]: TransactionsListFilter,
    [TransactionsListTable.name]: TransactionsListTable,
    [TransactionsListToolbar.name]: TransactionsListToolbar,
  },
};
</script>

<style>
</style>
