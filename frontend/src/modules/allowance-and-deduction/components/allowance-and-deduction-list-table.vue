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
        :label="fields.adRef.label"
        :prop="fields.adRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'adRef') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.adType.label"
        :prop="fields.adType.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'adType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="fields.adStaff.label" :prop="fields.adStaff.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.adStaff.label"
            :permission="fields.adStaff.readPermission"
            :url="fields.adStaff.viewUrl"
            :value="presenter(scope.row, 'adStaff')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.adAmmount.label"
        :prop="fields.adAmmount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'adAmmount') }}</template>
      </el-table-column>

      <el-table-column :label="fields.adStall.label" :prop="fields.adStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.adStall.label"
            :permission="fields.adStall.readPermission"
            :url="fields.adStall.viewUrl"
            :value="presenter(scope.row, 'adStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.adDate.label"
        :prop="fields.adDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'adDate') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/allowance-and-deduction/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/allowance-and-deduction/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { AllowanceAndDeductionModel } from '@/modules/allowance-and-deduction/allowance-and-deduction-model';
import { mapGetters, mapActions } from 'vuex';
import { AllowanceAndDeductionPermissions } from '@/modules/allowance-and-deduction/allowance-and-deduction-permissions';
import { i18n } from '@/i18n';

const { fields } = AllowanceAndDeductionModel;

export default {
  name: 'app-allowance-and-deduction-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'allowanceAndDeduction/list/rows',
      count: 'allowanceAndDeduction/list/count',
      loading: 'allowanceAndDeduction/list/loading',
      pagination: 'allowanceAndDeduction/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'allowanceAndDeduction/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AllowanceAndDeductionPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new AllowanceAndDeductionPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'allowanceAndDeduction/list/doChangeSort',
      doChangePaginationCurrentPage:
        'allowanceAndDeduction/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'allowanceAndDeduction/list/doChangePaginationPageSize',
      doMountTable: 'allowanceAndDeduction/list/doMountTable',
      doDestroy: 'allowanceAndDeduction/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AllowanceAndDeductionModel.presenter(row, fieldName);
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
