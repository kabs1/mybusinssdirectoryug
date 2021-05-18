<template>
  <div>
    <el-table
      :data="rows"
      stripe
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.categoryCover.label"
        :prop="fields.categoryCover.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'categoryCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.categoryTitle.label"
        :prop="fields.categoryTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'categoryTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.categoryShortCode.label"
        :prop="fields.categoryShortCode.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'categoryShortCode') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.categoryDetails.label"
        :prop="fields.categoryDetails.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'categoryDetails') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/categories/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { CategoriesModel } from '@/modules/categories/categories-model';
import { mapGetters, mapActions } from 'vuex';
import { CategoriesPermissions } from '@/modules/categories/categories-permissions';
import { i18n } from '@/i18n';

const { fields } = CategoriesModel;

export default {
  name: 'app-categories-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'categories/list/rows',
      count: 'categories/list/count',
      loading: 'categories/list/loading',
      pagination: 'categories/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'categories/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CategoriesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CategoriesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'categories/list/doChangeSort',
      doChangePaginationCurrentPage:
        'categories/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'categories/list/doChangePaginationPageSize',
      doMountTable: 'categories/list/doMountTable',
      doDestroy: 'categories/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CategoriesModel.presenter(row, fieldName);
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
