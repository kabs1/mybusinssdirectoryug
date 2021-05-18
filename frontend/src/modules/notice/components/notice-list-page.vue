<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.notice.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.notice.list.title"></app-i18n>
      </h1>

      <app-notice-list-toolbar></app-notice-list-toolbar>
      <app-notice-list-filter></app-notice-list-filter>
      <app-notice-list-table></app-notice-list-table>
    </div>
  </div>
</template>

<script>
import NoticeListFilter from '@/modules/notice/components/notice-list-filter.vue';
import NoticeListTable from '@/modules/notice/components/notice-list-table.vue';
import NoticeListToolbar from '@/modules/notice/components/notice-list-toolbar.vue';

export default {
  name: 'app-notice-list-page',

  components: {
    [NoticeListFilter.name]: NoticeListFilter,
    [NoticeListTable.name]: NoticeListTable,
    [NoticeListToolbar.name]: NoticeListToolbar,
  },
};
</script>

<style>
</style>
