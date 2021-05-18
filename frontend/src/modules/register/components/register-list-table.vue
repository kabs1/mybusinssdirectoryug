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
        :label="fields.registerRef.label"
        :prop="fields.registerRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.registerStall.label" :prop="fields.registerStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.registerStall.label"
            :permission="fields.registerStall.readPermission"
            :url="fields.registerStall.viewUrl"
            :value="presenter(scope.row, 'registerStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.registerStaff.label" :prop="fields.registerStaff.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.registerStaff.label"
            :permission="fields.registerStaff.readPermission"
            :url="fields.registerStaff.viewUrl"
            :value="presenter(scope.row, 'registerStaff')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.registerOpeningValue.label"
        :prop="fields.registerOpeningValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerOpeningValue') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.registerClosingValue.label"
        :prop="fields.registerClosingValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerClosingValue') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.registerSaleValue.label"
        :prop="fields.registerSaleValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerSaleValue') }}</template>
      </el-table-column>

<!--      <el-table-column-->
<!--        :label="fields.registerSaleItems.label"-->
<!--        :prop="fields.registerSaleItems.name"-->
<!--        sortable="custom"-->
<!--      >-->
<!--        <template slot-scope="scope">{{ presenter(scope.row, 'registerSaleItems') }}</template>-->
<!--      </el-table-column>-->

      <el-table-column
        :label="fields.registerOpenTime.label"
        :prop="fields.registerOpenTime.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerOpenTime') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.registerCloseTime.label"
        :prop="fields.registerCloseTime.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'registerCloseTime') }}</template>
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
import { RegisterModel } from '@/modules/register/register-model';
import { mapGetters, mapActions } from 'vuex';
import { RegisterPermissions } from '@/modules/register/register-permissions';
import { i18n } from '@/i18n';

const { fields } = RegisterModel;

export default {
  name: 'app-register-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'register/list/rows',
      count: 'register/list/count',
      loading: 'register/list/loading',
      pagination: 'register/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'register/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new RegisterPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new RegisterPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'register/list/doChangeSort',
      doChangePaginationCurrentPage:
        'register/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'register/list/doChangePaginationPageSize',
      doMountTable: 'register/list/doMountTable',
      doDestroy: 'register/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return RegisterModel.presenter(row, fieldName);
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
