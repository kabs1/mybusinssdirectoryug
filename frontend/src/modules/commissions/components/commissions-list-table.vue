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

      <el-table-column :label="fields.id.label" :prop="fields.id.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
      </el-table-column>

      <el-table-column :label="fields.commStaff.label" :prop="fields.commStaff.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.commStaff.label"
            :permission="fields.commStaff.readPermission"
            :url="fields.commStaff.viewUrl"
            :value="presenter(scope.row, 'commStaff')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.commSale.label" :prop="fields.commSale.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.commSale.label"
            :permission="fields.commSale.readPermission"
            :url="fields.commSale.viewUrl"
            :value="presenter(scope.row, 'commSale')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.commStall.label" :prop="fields.commStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.commStall.label"
            :permission="fields.commStall.readPermission"
            :url="fields.commStall.viewUrl"
            :value="presenter(scope.row, 'commStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.commRegister.label" :prop="fields.commRegister.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.commRegister.label"
            :permission="fields.commRegister.readPermission"
            :url="fields.commRegister.viewUrl"
            :value="presenter(scope.row, 'commRegister')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.commAmount.label"
        :prop="fields.commAmount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'commAmount') }}</template>
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
import { CommissionsModel } from '@/modules/commissions/commissions-model';
import { mapGetters, mapActions } from 'vuex';
import { CommissionsPermissions } from '@/modules/commissions/commissions-permissions';
import { i18n } from '@/i18n';

const { fields } = CommissionsModel;

export default {
  name: 'app-commissions-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'commissions/list/rows',
      count: 'commissions/list/count',
      loading: 'commissions/list/loading',
      pagination: 'commissions/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'commissions/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CommissionsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CommissionsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'commissions/list/doChangeSort',
      doChangePaginationCurrentPage:
        'commissions/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'commissions/list/doChangePaginationPageSize',
      doMountTable: 'commissions/list/doMountTable',
      doDestroy: 'commissions/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CommissionsModel.presenter(row, fieldName);
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
