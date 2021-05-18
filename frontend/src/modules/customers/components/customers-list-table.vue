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
        :label="fields.customerProfile.label"
        :prop="fields.customerProfile.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar :value="presenter(scope.row, 'customerProfile')"></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.customerNames.label"
        :prop="fields.customerNames.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'customerNames') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.customerDiscount.label"
        :prop="fields.customerDiscount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'customerDiscount') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.customerStatus.label"
        :prop="fields.customerStatus.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="info"> {{ presenter(scope.row, 'customerStatus') }} </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.customerAccountBalance.label"
        :prop="fields.customerAccountBalance.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'customerAccountBalance') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.customerLoyaltyPoints.label"
        :prop="fields.customerLoyaltyPoints.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="warning"> {{ presenter(scope.row, 'customerLoyaltyPoints') || 0}} </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.customerCreditBalance.label"
        :prop="fields.customerCreditBalance.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'customerCreditBalance') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/customers/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/customers/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { CustomersModel } from '@/modules/customers/customers-model';
import { mapGetters, mapActions } from 'vuex';
import { CustomersPermissions } from '@/modules/customers/customers-permissions';
import { i18n } from '@/i18n';
import AppListItemAppAvatar from "../../../shared/list/list-item-avatar";

const { fields } = CustomersModel;

export default {
  name: 'app-customers-list-table',
  components: {AppListItemAppAvatar},
  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'customers/list/rows',
      count: 'customers/list/count',
      loading: 'customers/list/loading',
      pagination: 'customers/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'customers/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CustomersPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CustomersPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'customers/list/doChangeSort',
      doChangePaginationCurrentPage:
        'customers/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'customers/list/doChangePaginationPageSize',
      doMountTable: 'customers/list/doMountTable',
      doDestroy: 'customers/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CustomersModel.presenter(row, fieldName);
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
