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
        :label="fields.taxClassName.label"
        :prop="fields.taxClassName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'taxClassName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.taxClassPercentage.label"
        :prop="fields.taxClassPercentage.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'taxClassPercentage') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/tax-class/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="primary" icon="el-icon-edit" circle>
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
import { TaxClassModel } from '@/modules/tax-class/tax-class-model';
import { mapGetters, mapActions } from 'vuex';
import { TaxClassPermissions } from '@/modules/tax-class/tax-class-permissions';
import { i18n } from '@/i18n';

const { fields } = TaxClassModel;

export default {
  name: 'app-tax-class-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'taxClass/list/rows',
      count: 'taxClass/list/count',
      loading: 'taxClass/list/loading',
      pagination: 'taxClass/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'taxClass/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new TaxClassPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new TaxClassPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'taxClass/list/doChangeSort',
      doChangePaginationCurrentPage:
        'taxClass/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'taxClass/list/doChangePaginationPageSize',
      doMountTable: 'taxClass/list/doMountTable',
      doDestroy: 'taxClass/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return TaxClassModel.presenter(row, fieldName);
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
