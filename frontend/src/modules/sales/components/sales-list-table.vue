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
        :label="fields.salesInvoiceNo.label"
        :prop="fields.salesInvoiceNo.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'salesInvoiceNo') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.salesTotalAmount.label"
        :prop="fields.salesTotalAmount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'salesTotalAmount') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.salePaymentType.label"
        :prop="fields.salePaymentType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'salePaymentType') }}</template>
      </el-table-column>

      <el-table-column :label="fields.saleDevice.label" :prop="fields.saleDevice.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.saleDevice.label"
            :permission="fields.saleDevice.readPermission"
            :url="fields.saleDevice.viewUrl"
            :value="presenter(scope.row, 'saleDevice')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.salesStall.label" :prop="fields.salesStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.salesStall.label"
            :permission="fields.salesStall.readPermission"
            :url="fields.salesStall.viewUrl"
            :value="presenter(scope.row, 'salesStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/sales/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>
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
import { SalesModel } from '@/modules/sales/sales-model';
import { mapGetters, mapActions } from 'vuex';
import { SalesPermissions } from '@/modules/sales/sales-permissions';
import { i18n } from '@/i18n';

const { fields } = SalesModel;

export default {
  name: 'app-sales-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'sales/list/rows',
      count: 'sales/list/count',
      loading: 'sales/list/loading',
      pagination: 'sales/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'sales/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new SalesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new SalesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'sales/list/doChangeSort',
      doChangePaginationCurrentPage:
        'sales/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'sales/list/doChangePaginationPageSize',
      doMountTable: 'sales/list/doMountTable',
      doDestroy: 'sales/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return SalesModel.presenter(row, fieldName);
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
