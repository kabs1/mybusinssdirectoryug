<template>
  <div>
    <el-table
      stripe
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.holidayCover.label"
        :prop="fields.holidayCover.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'holidayCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.holidayTitle.label"
        :prop="fields.holidayTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'holidayTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.holidayStartDate.label"
        :prop="fields.holidayStartDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'holidayStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.holidayEndDate.label"
        :prop="fields.holidayEndDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'holidayEndDate') }}</template>
      </el-table-column>

      <el-table-column :label="fields.holidayStall.label" :prop="fields.holidayStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.holidayStall.label"
            :permission="fields.holidayStall.readPermission"
            :url="fields.holidayStall.viewUrl"
            :value="presenter(scope.row, 'holidayStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/holiday/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/holiday/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { HolidayModel } from '@/modules/holiday/holiday-model';
import { mapGetters, mapActions } from 'vuex';
import { HolidayPermissions } from '@/modules/holiday/holiday-permissions';
import { i18n } from '@/i18n';

const { fields } = HolidayModel;

export default {
  name: 'app-holiday-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'holiday/list/rows',
      count: 'holiday/list/count',
      loading: 'holiday/list/loading',
      pagination: 'holiday/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'holiday/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new HolidayPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new HolidayPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'holiday/list/doChangeSort',
      doChangePaginationCurrentPage:
        'holiday/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'holiday/list/doChangePaginationPageSize',
      doMountTable: 'holiday/list/doMountTable',
      doDestroy: 'holiday/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return HolidayModel.presenter(row, fieldName);
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
