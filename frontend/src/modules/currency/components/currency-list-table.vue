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
        :label="fields.currencyTitle.label"
        :prop="fields.currencyTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'currencyTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.currencyCode.label"
        :prop="fields.currencyCode.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'currencyCode') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.currencySign.label"
        :prop="fields.currencySign.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'currencySign') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/currency/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { CurrencyModel } from '@/modules/currency/currency-model';
import { mapGetters, mapActions } from 'vuex';
import { CurrencyPermissions } from '@/modules/currency/currency-permissions';
import { i18n } from '@/i18n';

const { fields } = CurrencyModel;

export default {
  name: 'app-currency-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'currency/list/rows',
      count: 'currency/list/count',
      loading: 'currency/list/loading',
      pagination: 'currency/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'currency/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CurrencyPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CurrencyPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'currency/list/doChangeSort',
      doChangePaginationCurrentPage:
        'currency/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'currency/list/doChangePaginationPageSize',
      doMountTable: 'currency/list/doMountTable',
      doDestroy: 'currency/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CurrencyModel.presenter(row, fieldName);
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
