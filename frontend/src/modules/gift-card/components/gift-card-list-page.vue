<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.giftCard.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.giftCard.list.title"></app-i18n>
      </h1>

      <app-gift-card-list-toolbar></app-gift-card-list-toolbar>
      <app-gift-card-list-filter></app-gift-card-list-filter>
      <app-gift-card-list-table></app-gift-card-list-table>
    </div>
  </div>
</template>

<script>
import GiftCardListFilter from '@/modules/gift-card/components/gift-card-list-filter.vue';
import GiftCardListTable from '@/modules/gift-card/components/gift-card-list-table.vue';
import GiftCardListToolbar from '@/modules/gift-card/components/gift-card-list-toolbar.vue';

export default {
  name: 'app-gift-card-list-page',

  components: {
    [GiftCardListFilter.name]: GiftCardListFilter,
    [GiftCardListTable.name]: GiftCardListTable,
    [GiftCardListToolbar.name]: GiftCardListToolbar,
  },
};
</script>

<style>
</style>
