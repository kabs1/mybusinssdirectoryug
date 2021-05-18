<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.customers.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customers.list.title"></app-i18n>
      </h1>

      <app-customers-list-toolbar></app-customers-list-toolbar>
      <app-customers-list-filter></app-customers-list-filter>
      <app-customers-list-table></app-customers-list-table>
    </div>
  </div>
</template>

<script>
import CustomersListFilter from '@/modules/customers/components/customers-list-filter.vue';
import CustomersListTable from '@/modules/customers/components/customers-list-table.vue';
import CustomersListToolbar from '@/modules/customers/components/customers-list-toolbar.vue';

export default {
  name: 'app-customers-list-page',

  components: {
    [CustomersListFilter.name]: CustomersListFilter,
    [CustomersListTable.name]: CustomersListTable,
    [CustomersListToolbar.name]: CustomersListToolbar,
  },
};
</script>

<style>
</style>
