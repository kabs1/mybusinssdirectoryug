<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.memos.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.memos.list.title"></app-i18n>
      </h1>

      <app-memos-list-toolbar></app-memos-list-toolbar>
      <app-memos-list-filter></app-memos-list-filter>
      <app-memos-list-table></app-memos-list-table>
    </div>
  </div>
</template>

<script>
import MemosListFilter from '@/modules/memos/components/memos-list-filter.vue';
import MemosListTable from '@/modules/memos/components/memos-list-table.vue';
import MemosListToolbar from '@/modules/memos/components/memos-list-toolbar.vue';

export default {
  name: 'app-memos-list-page',

  components: {
    [MemosListFilter.name]: MemosListFilter,
    [MemosListTable.name]: MemosListTable,
    [MemosListToolbar.name]: MemosListToolbar,
  },
};
</script>

<style>
</style>
