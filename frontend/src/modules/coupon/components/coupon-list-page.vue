<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.coupon.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.coupon.list.title"></app-i18n>
      </h1>

      <app-coupon-list-toolbar></app-coupon-list-toolbar>
      <app-coupon-list-filter></app-coupon-list-filter>
      <app-coupon-list-table></app-coupon-list-table>
    </div>
  </div>
</template>

<script>
import CouponListFilter from '@/modules/coupon/components/coupon-list-filter.vue';
import CouponListTable from '@/modules/coupon/components/coupon-list-table.vue';
import CouponListToolbar from '@/modules/coupon/components/coupon-list-toolbar.vue';

export default {
  name: 'app-coupon-list-page',

  components: {
    [CouponListFilter.name]: CouponListFilter,
    [CouponListTable.name]: CouponListTable,
    [CouponListToolbar.name]: CouponListToolbar,
  },
};
</script>

<style>
</style>
