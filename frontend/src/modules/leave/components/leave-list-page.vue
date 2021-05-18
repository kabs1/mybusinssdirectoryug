<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leave.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leave.list.title"></app-i18n>
      </h1>

      <app-leave-list-toolbar></app-leave-list-toolbar>
      <app-leave-list-filter></app-leave-list-filter>
      <app-leave-list-table></app-leave-list-table>
    </div>
  </div>
</template>

<script>
import LeaveListFilter from '@/modules/leave/components/leave-list-filter.vue';
import LeaveListTable from '@/modules/leave/components/leave-list-table.vue';
import LeaveListToolbar from '@/modules/leave/components/leave-list-toolbar.vue';

export default {
  name: 'app-leave-list-page',

  components: {
    [LeaveListFilter.name]: LeaveListFilter,
    [LeaveListTable.name]: LeaveListTable,
    [LeaveListToolbar.name]: LeaveListToolbar,
  },
};
</script>

<style>
</style>
