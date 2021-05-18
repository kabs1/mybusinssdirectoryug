<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.documents.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documents.list.title"></app-i18n>
      </h1>

      <app-documents-list-toolbar></app-documents-list-toolbar>
      <app-documents-list-filter></app-documents-list-filter>
      <app-documents-list-table></app-documents-list-table>
    </div>
  </div>
</template>

<script>
import DocumentsListFilter from '@/modules/documents/components/documents-list-filter.vue';
import DocumentsListTable from '@/modules/documents/components/documents-list-table.vue';
import DocumentsListToolbar from '@/modules/documents/components/documents-list-toolbar.vue';

export default {
  name: 'app-documents-list-page',

  components: {
    [DocumentsListFilter.name]: DocumentsListFilter,
    [DocumentsListTable.name]: DocumentsListTable,
    [DocumentsListToolbar.name]: DocumentsListToolbar,
  },
};
</script>

<style>
</style>
