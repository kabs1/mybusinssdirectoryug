<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.attendance.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.attendance.list.title"></app-i18n>
      </h1>

      <app-attendance-list-toolbar></app-attendance-list-toolbar>
      <app-attendance-list-filter></app-attendance-list-filter>
      <app-attendance-list-table></app-attendance-list-table>
    </div>
  </div>
</template>

<script>
import AttendanceListFilter from '@/modules/attendance/components/attendance-list-filter.vue';
import AttendanceListTable from '@/modules/attendance/components/attendance-list-table.vue';
import AttendanceListToolbar from '@/modules/attendance/components/attendance-list-toolbar.vue';

export default {
  name: 'app-attendance-list-page',

  components: {
    [AttendanceListFilter.name]: AttendanceListFilter,
    [AttendanceListTable.name]: AttendanceListTable,
    [AttendanceListToolbar.name]: AttendanceListToolbar,
  },
};
</script>

<style>
</style>
