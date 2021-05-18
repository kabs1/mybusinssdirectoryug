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
        :label="fields.paymentMethodLogo.label"
        :prop="fields.paymentMethodLogo.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'paymentMethodLogo')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.paymentMethodTitle.label"
        :prop="fields.paymentMethodTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'paymentMethodTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.paymentMethodType.label"
        :prop="fields.paymentMethodType.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'paymentMethodType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/payment-methods/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { PaymentMethodsModel } from '@/modules/payment-methods/payment-methods-model';
import { mapGetters, mapActions } from 'vuex';
import { PaymentMethodsPermissions } from '@/modules/payment-methods/payment-methods-permissions';
import { i18n } from '@/i18n';

const { fields } = PaymentMethodsModel;

export default {
  name: 'app-payment-methods-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'paymentMethods/list/rows',
      count: 'paymentMethods/list/count',
      loading: 'paymentMethods/list/loading',
      pagination: 'paymentMethods/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'paymentMethods/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new PaymentMethodsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new PaymentMethodsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'paymentMethods/list/doChangeSort',
      doChangePaginationCurrentPage:
        'paymentMethods/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'paymentMethods/list/doChangePaginationPageSize',
      doMountTable: 'paymentMethods/list/doMountTable',
      doDestroy: 'paymentMethods/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return PaymentMethodsModel.presenter(row, fieldName);
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
