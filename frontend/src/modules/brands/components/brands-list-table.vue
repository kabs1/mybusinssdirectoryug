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
        :label="fields.brandCover.label"
        :prop="fields.brandCover.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'brandCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.brandTitle.label"
        :prop="fields.brandTitle.name"
        width="180"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'brandTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.brandDetails.label"
        :prop="fields.brandDetails.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'brandDetails') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/brands/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { BrandsModel } from '@/modules/brands/brands-model';
import { mapGetters, mapActions } from 'vuex';
import { BrandsPermissions } from '@/modules/brands/brands-permissions';
import { i18n } from '@/i18n';

const { fields } = BrandsModel;

export default {
  name: 'app-brands-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'brands/list/rows',
      count: 'brands/list/count',
      loading: 'brands/list/loading',
      pagination: 'brands/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'brands/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new BrandsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new BrandsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'brands/list/doChangeSort',
      doChangePaginationCurrentPage:
        'brands/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'brands/list/doChangePaginationPageSize',
      doMountTable: 'brands/list/doMountTable',
      doDestroy: 'brands/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return BrandsModel.presenter(row, fieldName);
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
