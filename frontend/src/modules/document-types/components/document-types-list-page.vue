<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.documentTypes.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documentTypes.list.title"></app-i18n>
      </h1>

      <app-document-types-list-toolbar></app-document-types-list-toolbar>
      <app-document-types-list-filter></app-document-types-list-filter>
      <app-document-types-list-table></app-document-types-list-table>
    </div>
  </div>
</template>

<script>
import DocumentTypesListFilter from '@/modules/document-types/components/document-types-list-filter.vue';
import DocumentTypesListTable from '@/modules/document-types/components/document-types-list-table.vue';
import DocumentTypesListToolbar from '@/modules/document-types/components/document-types-list-toolbar.vue';

export default {
  name: 'app-document-types-list-page',

  components: {
    [DocumentTypesListFilter.name]: DocumentTypesListFilter,
    [DocumentTypesListTable.name]: DocumentTypesListTable,
    [DocumentTypesListToolbar.name]: DocumentTypesListToolbar,
  },
};
</script>

<style>
</style>
