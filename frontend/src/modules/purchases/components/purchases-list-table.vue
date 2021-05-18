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
        :label="fields.purchasesRef.label"
        :prop="fields.purchasesRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'purchasesRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.purchaseProduct.label" :prop="fields.purchaseProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.purchaseProduct.label"
            :permission="fields.purchaseProduct.readPermission"
            :url="fields.purchaseProduct.viewUrl"
            :value="presenter(scope.row, 'purchaseProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.purchaseSupplier.label" :prop="fields.purchaseSupplier.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.purchaseSupplier.label"
            :permission="fields.purchaseSupplier.readPermission"
            :url="fields.purchaseSupplier.viewUrl"
            :value="presenter(scope.row, 'purchaseSupplier')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.purchasePaymentStatus.label"
        :prop="fields.purchasePaymentStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'purchasePaymentStatus') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.purchaseUnits.label"
        :prop="fields.purchaseUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'purchaseUnits') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.purchaseTotalAmount.label"
        :prop="fields.purchaseTotalAmount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'purchaseTotalAmount') }}</template>
      </el-table-column>

      <el-table-column :label="fields.purchaseStall.label" :prop="fields.purchaseStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.purchaseStall.label"
            :permission="fields.purchaseStall.readPermission"
            :url="fields.purchaseStall.viewUrl"
            :value="presenter(scope.row, 'purchaseStall')"
          ></app-list-item-relation-to-one>
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
import { PurchasesModel } from '@/modules/purchases/purchases-model';
import { mapGetters, mapActions } from 'vuex';
import { PurchasesPermissions } from '@/modules/purchases/purchases-permissions';
import { i18n } from '@/i18n';

const { fields } = PurchasesModel;

export default {
  name: 'app-purchases-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'purchases/list/rows',
      count: 'purchases/list/count',
      loading: 'purchases/list/loading',
      pagination: 'purchases/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'purchases/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new PurchasesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new PurchasesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'purchases/list/doChangeSort',
      doChangePaginationCurrentPage:
        'purchases/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'purchases/list/doChangePaginationPageSize',
      doMountTable: 'purchases/list/doMountTable',
      doDestroy: 'purchases/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return PurchasesModel.presenter(row, fieldName);
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
