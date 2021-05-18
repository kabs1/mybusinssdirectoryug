<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.holiday.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.holiday.list.title"></app-i18n>
      </h1>

      <app-holiday-list-toolbar></app-holiday-list-toolbar>
      <app-holiday-list-filter></app-holiday-list-filter>
      <app-holiday-list-table></app-holiday-list-table>
    </div>
  </div>
</template>

<script>
import HolidayListFilter from '@/modules/holiday/components/holiday-list-filter.vue';
import HolidayListTable from '@/modules/holiday/components/holiday-list-table.vue';
import HolidayListToolbar from '@/modules/holiday/components/holiday-list-toolbar.vue';

export default {
  name: 'app-holiday-list-page',

  components: {
    [HolidayListFilter.name]: HolidayListFilter,
    [HolidayListTable.name]: HolidayListTable,
    [HolidayListToolbar.name]: HolidayListToolbar,
  },
};
</script>

<style>
</style>
