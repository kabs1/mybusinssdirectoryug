<template>
  <div>
    <el-table
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      stripe
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.staffProfile.label"
        :prop="fields.staffProfile.name"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar :value="presenter(scope.row, 'staffProfile')"></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.staffNames.label"
        :prop="fields.staffNames.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'staffNames') }}</template>
      </el-table-column>

      <el-table-column :label="fields.staffUserId.label" :prop="fields.staffUserId.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.staffUserId.label"
            :permission="fields.staffUserId.readPermission"
            :url="fields.staffUserId.viewUrl"
            :value="presenter(scope.row, 'staffUserId')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.staffPhoneNumber.label"
        :prop="fields.staffPhoneNumber.name"
        align="center"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'staffPhoneNumber') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.staffIsAServiceWorker.label"
        :prop="fields.staffIsAServiceWorker.name"
        align="center"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'staffIsAServiceWorker') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.staffCommision.label"
        :prop="fields.staffCommision.name"
        align="center"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'staffCommision') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/staff/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/staff/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { StaffModel } from '@/modules/staff/staff-model';
import { mapGetters, mapActions } from 'vuex';
import { StaffPermissions } from '@/modules/staff/staff-permissions';
import { i18n } from '@/i18n';
import AppListItemAppAvatar from "../../../shared/list/list-item-avatar";

const { fields } = StaffModel;

export default {
  name: 'app-staff-list-table',
  components: {AppListItemAppAvatar},
  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'staff/list/rows',
      count: 'staff/list/count',
      loading: 'staff/list/loading',
      pagination: 'staff/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'staff/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new StaffPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new StaffPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'staff/list/doChangeSort',
      doChangePaginationCurrentPage:
        'staff/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'staff/list/doChangePaginationPageSize',
      doMountTable: 'staff/list/doMountTable',
      doDestroy: 'staff/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return StaffModel.presenter(row, fieldName);
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
