<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.currency.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.currency.list.title"></app-i18n>
      </h1>

      <app-currency-list-toolbar></app-currency-list-toolbar>
      <app-currency-list-filter></app-currency-list-filter>
      <app-currency-list-table></app-currency-list-table>
    </div>
  </div>
</template>

<script>
import CurrencyListFilter from '@/modules/currency/components/currency-list-filter.vue';
import CurrencyListTable from '@/modules/currency/components/currency-list-table.vue';
import CurrencyListToolbar from '@/modules/currency/components/currency-list-toolbar.vue';

export default {
  name: 'app-currency-list-page',

  components: {
    [CurrencyListFilter.name]: CurrencyListFilter,
    [CurrencyListTable.name]: CurrencyListTable,
    [CurrencyListToolbar.name]: CurrencyListToolbar,
  },
};
</script>

<style>
</style>
