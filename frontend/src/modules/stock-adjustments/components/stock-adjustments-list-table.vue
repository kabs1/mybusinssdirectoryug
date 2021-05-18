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
        :label="fields.stockAdjustmentRef.label"
        :prop="fields.stockAdjustmentRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stockAdjustmentRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.stockAdjustmentProduct.label" :prop="fields.stockAdjustmentProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.stockAdjustmentProduct.label"
            :permission="fields.stockAdjustmentProduct.readPermission"
            :url="fields.stockAdjustmentProduct.viewUrl"
            :value="presenter(scope.row, 'stockAdjustmentProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentType.label"
        :prop="fields.stockAdjustmentType.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'stockAdjustmentType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentUnits.label"
        :prop="fields.stockAdjustmentUnits.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stockAdjustmentUnits') }}</template>
      </el-table-column>

      <el-table-column :label="fields.adjustmentStall.label" :prop="fields.adjustmentStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.adjustmentStall.label"
            :permission="fields.adjustmentStall.readPermission"
            :url="fields.adjustmentStall.viewUrl"
            :value="presenter(scope.row, 'adjustmentStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentsReason.label"
        :prop="fields.stockAdjustmentsReason.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stockAdjustmentsReason') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentClass.label"
        :prop="fields.stockAdjustmentClass.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag>{{ presenter(scope.row, 'stockAdjustmentClass') || 0 }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentLoss.label"
        :prop="fields.stockAdjustmentLoss.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="danger">{{ presenter(scope.row, 'stockAdjustmentLoss') || 0 }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stockAdjustmentRecorverdAmount.label"
        :prop="fields.stockAdjustmentRecorverdAmount.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="success">{{ presenter(scope.row, 'stockAdjustmentRecorverdAmount') || 0 }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
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
import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';
import { mapGetters, mapActions } from 'vuex';
import { StockAdjustmentsPermissions } from '@/modules/stock-adjustments/stock-adjustments-permissions';
import { i18n } from '@/i18n';

const { fields } = StockAdjustmentsModel;

export default {
  name: 'app-stock-adjustments-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'stockAdjustments/list/rows',
      count: 'stockAdjustments/list/count',
      loading: 'stockAdjustments/list/loading',
      pagination: 'stockAdjustments/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'stockAdjustments/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new StockAdjustmentsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new StockAdjustmentsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'stockAdjustments/list/doChangeSort',
      doChangePaginationCurrentPage:
        'stockAdjustments/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'stockAdjustments/list/doChangePaginationPageSize',
      doMountTable: 'stockAdjustments/list/doMountTable',
      doDestroy: 'stockAdjustments/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return StockAdjustmentsModel.presenter(row, fieldName);
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
