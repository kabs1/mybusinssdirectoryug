<template>
  <div>
    <el-table
      :data="rows"
      stripe
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.deviceImage.label"
        :prop="fields.deviceImage.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'deviceImage')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.deviceName.label"
        :prop="fields.deviceName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'deviceName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.deviceSerial.label"
        :prop="fields.deviceSerial.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'deviceSerial') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.deviceType.label"
        :prop="fields.deviceType.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'deviceType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="fields.deviceCurrency.label" :prop="fields.deviceCurrency.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.deviceCurrency.label"
            :permission="fields.deviceCurrency.readPermission"
            :url="fields.deviceCurrency.viewUrl"
            :value="presenter(scope.row, 'deviceCurrency')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.deviceStall.label" :prop="fields.deviceStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.deviceStall.label"
            :permission="fields.deviceStall.readPermission"
            :url="fields.deviceStall.viewUrl"
            :value="presenter(scope.row, 'deviceStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/devices/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="danger" icon="el-icon-delete" circle
              v-if="hasPermissionToDestroy"
            >
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { DevicesModel } from '@/modules/devices/devices-model';
import { mapGetters, mapActions } from 'vuex';
import { DevicesPermissions } from '@/modules/devices/devices-permissions';
import { i18n } from '@/i18n';

const { fields } = DevicesModel;

export default {
  name: 'app-devices-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'devices/list/rows',
      count: 'devices/list/count',
      loading: 'devices/list/loading',
      pagination: 'devices/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'devices/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DevicesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DevicesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'devices/list/doChangeSort',
      doChangePaginationCurrentPage:
        'devices/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'devices/list/doChangePaginationPageSize',
      doMountTable: 'devices/list/doMountTable',
      doDestroy: 'devices/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DevicesModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
