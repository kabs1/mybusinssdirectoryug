<template>
  <div>
    <el-table
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      stripe
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.productImage.label"
        :prop="fields.productImage.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'productImage')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.productName.label"
        :prop="fields.productName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.productSku.label"
        :prop="fields.productSku.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productSku') }}</template>
      </el-table-column>

      <el-table-column
              :label="fields.productAlertQuantity.label"
              :prop="fields.productAlertQuantity.name"
              sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'productAlertQuantity') }}</template>
      </el-table-column>

      <el-table-column
              :label="fields.productStatus.label"
              :prop="fields.productStatus.name"
              sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="success">{{ presenter(scope.row, 'productStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
              :label="fields.productEnableStock.label"
              :prop="fields.productEnableStock.name"
              sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'productEnableStock') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="fields.productStall.label" :prop="fields.productStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.productStall.label"
            :permission="fields.productStall.readPermission"
            :url="fields.productStall.viewUrl"
            :value="presenter(scope.row, 'productStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/products/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/products/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
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
import { ProductsModel } from '@/modules/products/products-model';
import { mapGetters, mapActions } from 'vuex';
import { ProductsPermissions } from '@/modules/products/products-permissions';
import { i18n } from '@/i18n';

const { fields } = ProductsModel;

export default {
  name: 'app-products-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'products/list/rows',
      count: 'products/list/count',
      loading: 'products/list/loading',
      pagination: 'products/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'products/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ProductsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ProductsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'products/list/doChangeSort',
      doChangePaginationCurrentPage:
        'products/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'products/list/doChangePaginationPageSize',
      doMountTable: 'products/list/doMountTable',
      doDestroy: 'products/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ProductsModel.presenter(row, fieldName);
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
