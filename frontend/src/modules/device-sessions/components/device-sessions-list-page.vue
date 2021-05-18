<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.deviceSessions.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.deviceSessions.list.title"></app-i18n>
      </h1>

      <app-device-sessions-list-toolbar></app-device-sessions-list-toolbar>
      <app-device-sessions-list-filter></app-device-sessions-list-filter>
      <app-device-sessions-list-table></app-device-sessions-list-table>
    </div>
  </div>
</template>

<script>
import DeviceSessionsListFilter from '@/modules/device-sessions/components/device-sessions-list-filter.vue';
import DeviceSessionsListTable from '@/modules/device-sessions/components/device-sessions-list-table.vue';
import DeviceSessionsListToolbar from '@/modules/device-sessions/components/device-sessions-list-toolbar.vue';

export default {
  name: 'app-device-sessions-list-page',

  components: {
    [DeviceSessionsListFilter.name]: DeviceSessionsListFilter,
    [DeviceSessionsListTable.name]: DeviceSessionsListTable,
    [DeviceSessionsListToolbar.name]: DeviceSessionsListToolbar,
  },
};
</script>

<style>
</style>
