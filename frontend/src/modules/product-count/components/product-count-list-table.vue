<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.count.label"
        :prop="fields.count.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'count') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/product-count/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/product-count/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
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
import { ProductCountModel } from '@/modules/product-count/product-count-model';
import { mapGetters, mapActions } from 'vuex';
import { ProductCountPermissions } from '@/modules/product-count/product-count-permissions';
import { i18n } from '@/i18n';

const { fields } = ProductCountModel;

export default {
  name: 'app-product-count-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'productCount/list/rows',
      count: 'productCount/list/count',
      loading: 'productCount/list/loading',
      pagination: 'productCount/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'productCount/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ProductCountPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ProductCountPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'productCount/list/doChangeSort',
      doChangePaginationCurrentPage:
        'productCount/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'productCount/list/doChangePaginationPageSize',
      doMountTable: 'productCount/list/doMountTable',
      doDestroy: 'productCount/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ProductCountModel.presenter(row, fieldName);
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
