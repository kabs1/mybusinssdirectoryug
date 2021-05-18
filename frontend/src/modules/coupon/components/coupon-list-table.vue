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
        :label="fields.couponCode.label"
        :prop="fields.couponCode.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          {{ presenter(scope.row, 'couponCode') }}
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.couponType.label"
        :prop="fields.couponType.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="warning">{{ presenter(scope.row, 'couponType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.couponValue.label"
        :prop="fields.couponValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'couponValue') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.couponStartDate.label"
        :prop="fields.couponStartDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'couponStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.couponEndDate.label"
        :prop="fields.couponEndDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'couponEndDate') }}</template>
      </el-table-column>

      <el-table-column :label="fields.couponStall.label" :prop="fields.couponStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.couponStall.label"
            :permission="fields.couponStall.readPermission"
            :url="fields.couponStall.viewUrl"
            :value="presenter(scope.row, 'couponStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.couponStatus.label"
        :prop="fields.couponStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'couponStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.couponMaxUse.label"
        :prop="fields.couponMaxUse.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'couponMaxUse') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.couponUsageCount.label"
        :prop="fields.couponUsageCount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'couponUsageCount') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/coupon/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/coupon/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="primary" icon="el-icon-edit" circle
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
import { CouponModel } from '@/modules/coupon/coupon-model';
import { mapGetters, mapActions } from 'vuex';
import { CouponPermissions } from '@/modules/coupon/coupon-permissions';
import { i18n } from '@/i18n';

const { fields } = CouponModel;

export default {
  name: 'app-coupon-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'coupon/list/rows',
      count: 'coupon/list/count',
      loading: 'coupon/list/loading',
      pagination: 'coupon/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'coupon/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CouponPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new CouponPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'coupon/list/doChangeSort',
      doChangePaginationCurrentPage:
        'coupon/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'coupon/list/doChangePaginationPageSize',
      doMountTable: 'coupon/list/doMountTable',
      doDestroy: 'coupon/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CouponModel.presenter(row, fieldName);
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
