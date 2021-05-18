<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.paymentMethods.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.paymentMethods.list.title"></app-i18n>
      </h1>

      <app-payment-methods-list-toolbar></app-payment-methods-list-toolbar>
      <app-payment-methods-list-filter></app-payment-methods-list-filter>
      <app-payment-methods-list-table></app-payment-methods-list-table>
    </div>
  </div>
</template>

<script>
import PaymentMethodsListFilter from '@/modules/payment-methods/components/payment-methods-list-filter.vue';
import PaymentMethodsListTable from '@/modules/payment-methods/components/payment-methods-list-table.vue';
import PaymentMethodsListToolbar from '@/modules/payment-methods/components/payment-methods-list-toolbar.vue';

export default {
  name: 'app-payment-methods-list-page',

  components: {
    [PaymentMethodsListFilter.name]: PaymentMethodsListFilter,
    [PaymentMethodsListTable.name]: PaymentMethodsListTable,
    [PaymentMethodsListToolbar.name]: PaymentMethodsListToolbar,
  },
};
</script>

<style>
</style>
