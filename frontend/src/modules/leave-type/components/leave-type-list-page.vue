<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leaveType.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leaveType.list.title"></app-i18n>
      </h1>

      <app-leave-type-list-toolbar></app-leave-type-list-toolbar>
      <app-leave-type-list-filter></app-leave-type-list-filter>
      <app-leave-type-list-table></app-leave-type-list-table>
    </div>
  </div>
</template>

<script>
import LeaveTypeListFilter from '@/modules/leave-type/components/leave-type-list-filter.vue';
import LeaveTypeListTable from '@/modules/leave-type/components/leave-type-list-table.vue';
import LeaveTypeListToolbar from '@/modules/leave-type/components/leave-type-list-toolbar.vue';

export default {
  name: 'app-leave-type-list-page',

  components: {
    [LeaveTypeListFilter.name]: LeaveTypeListFilter,
    [LeaveTypeListTable.name]: LeaveTypeListTable,
    [LeaveTypeListToolbar.name]: LeaveTypeListToolbar,
  },
};
</script>

<style>
</style>
