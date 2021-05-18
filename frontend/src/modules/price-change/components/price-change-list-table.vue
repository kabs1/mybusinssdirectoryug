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
        :label="fields.priceChangeRef.label"
        :prop="fields.priceChangeRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'priceChangeRef') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.priceChangeType.label"
        :prop="fields.priceChangeType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'priceChangeType') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.priceChangeBefore.label"
        :prop="fields.priceChangeBefore.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'priceChangeBefore') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.priceChangeAfter.label"
        :prop="fields.priceChangeAfter.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'priceChangeAfter') }}</template>
      </el-table-column>

      <el-table-column :label="fields.priceChangeProduct.label" :prop="fields.priceChangeProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.priceChangeProduct.label"
            :permission="fields.priceChangeProduct.readPermission"
            :url="fields.priceChangeProduct.viewUrl"
            :value="presenter(scope.row, 'priceChangeProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.priceChangeStall.label" :prop="fields.priceChangeStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.priceChangeStall.label"
            :permission="fields.priceChangeStall.readPermission"
            :url="fields.priceChangeStall.viewUrl"
            :value="presenter(scope.row, 'priceChangeStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.priceChangeSession.label" :prop="fields.priceChangeSession.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.priceChangeSession.label"
            :permission="fields.priceChangeSession.readPermission"
            :url="fields.priceChangeSession.viewUrl"
            :value="presenter(scope.row, 'priceChangeSession')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.priceChangeStatus.label"
        :prop="fields.priceChangeStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'priceChangeStatus') }}</template>
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
import { PriceChangeModel } from '@/modules/price-change/price-change-model';
import { mapGetters, mapActions } from 'vuex';
import { PriceChangePermissions } from '@/modules/price-change/price-change-permissions';
import { i18n } from '@/i18n';

const { fields } = PriceChangeModel;

export default {
  name: 'app-price-change-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'priceChange/list/rows',
      count: 'priceChange/list/count',
      loading: 'priceChange/list/loading',
      pagination: 'priceChange/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'priceChange/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new PriceChangePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new PriceChangePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'priceChange/list/doChangeSort',
      doChangePaginationCurrentPage:
        'priceChange/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'priceChange/list/doChangePaginationPageSize',
      doMountTable: 'priceChange/list/doMountTable',
      doDestroy: 'priceChange/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return PriceChangeModel.presenter(row, fieldName);
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
