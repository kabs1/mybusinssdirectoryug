<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.priceChange.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.priceChange.list.title"></app-i18n>
      </h1>

      <app-price-change-list-toolbar></app-price-change-list-toolbar>
      <app-price-change-list-filter></app-price-change-list-filter>
      <app-price-change-list-table></app-price-change-list-table>
    </div>
  </div>
</template>

<script>
import PriceChangeListFilter from '@/modules/price-change/components/price-change-list-filter.vue';
import PriceChangeListTable from '@/modules/price-change/components/price-change-list-table.vue';
import PriceChangeListToolbar from '@/modules/price-change/components/price-change-list-toolbar.vue';

export default {
  name: 'app-price-change-list-page',

  components: {
    [PriceChangeListFilter.name]: PriceChangeListFilter,
    [PriceChangeListTable.name]: PriceChangeListTable,
    [PriceChangeListToolbar.name]: PriceChangeListToolbar,
  },
};
</script>

<style>
</style>
