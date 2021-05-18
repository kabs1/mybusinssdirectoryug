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
        :label="fields.variationName.label"
        :prop="fields.variationName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'variationName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.variationValues.label"
        :prop="fields.variationValues.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'variationValues') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/variation/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { VariationModel } from '@/modules/variation/variation-model';
import { mapGetters, mapActions } from 'vuex';
import { VariationPermissions } from '@/modules/variation/variation-permissions';
import { i18n } from '@/i18n';

const { fields } = VariationModel;

export default {
  name: 'app-variation-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'variation/list/rows',
      count: 'variation/list/count',
      loading: 'variation/list/loading',
      pagination: 'variation/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'variation/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new VariationPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new VariationPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'variation/list/doChangeSort',
      doChangePaginationCurrentPage:
        'variation/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'variation/list/doChangePaginationPageSize',
      doMountTable: 'variation/list/doMountTable',
      doDestroy: 'variation/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return VariationModel.presenter(row, fieldName);
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
