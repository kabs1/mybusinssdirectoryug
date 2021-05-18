<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.register.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.register.list.title"></app-i18n>
      </h1>

      <app-register-list-toolbar></app-register-list-toolbar>
      <app-register-list-filter></app-register-list-filter>
      <app-register-list-table></app-register-list-table>
    </div>
  </div>
</template>

<script>
import RegisterListFilter from '@/modules/register/components/register-list-filter.vue';
import RegisterListTable from '@/modules/register/components/register-list-table.vue';
import RegisterListToolbar from '@/modules/register/components/register-list-toolbar.vue';

export default {
  name: 'app-register-list-page',

  components: {
    [RegisterListFilter.name]: RegisterListFilter,
    [RegisterListTable.name]: RegisterListTable,
    [RegisterListToolbar.name]: RegisterListToolbar,
  },
};
</script>

<style>
</style>
