<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.devices.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.devices.list.title"></app-i18n>
      </h1>

      <app-devices-list-toolbar></app-devices-list-toolbar>
      <app-devices-list-filter></app-devices-list-filter>
      <app-devices-list-table></app-devices-list-table>
    </div>
  </div>
</template>

<script>
import DevicesListFilter from '@/modules/devices/components/devices-list-filter.vue';
import DevicesListTable from '@/modules/devices/components/devices-list-table.vue';
import DevicesListToolbar from '@/modules/devices/components/devices-list-toolbar.vue';

export default {
  name: 'app-devices-list-page',

  components: {
    [DevicesListFilter.name]: DevicesListFilter,
    [DevicesListTable.name]: DevicesListTable,
    [DevicesListToolbar.name]: DevicesListToolbar,
  },
};
</script>

<style>
</style>
