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
      <el-table-column type="selection"></el-table-column>

      <el-table-column
        :label="fields.damageCover.label"
        :prop="fields.damageCover.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'damageCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.damageRef.label"
        :prop="fields.damageRef.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'damageRef') }}</template>
      </el-table-column>

      <el-table-column :label="fields.damageProduct.label" :prop="fields.damageProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.damageProduct.label"
            :permission="fields.damageProduct.readPermission"
            :url="fields.damageProduct.viewUrl"
            :value="presenter(scope.row, 'damageProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.damageDate.label"
        :prop="fields.damageDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'damageDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.damageAmmount.label"
        :prop="fields.damageAmmount.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'damageAmmount') }}</template>
      </el-table-column>

      <el-table-column :label="fields.damageStall.label" :prop="fields.damageStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.damageStall.label"
            :permission="fields.damageStall.readPermission"
            :url="fields.damageStall.viewUrl"
            :value="presenter(scope.row, 'damageStall')"
          ></app-list-item-relation-to-many>
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
import { DamagesModel } from '@/modules/damages/damages-model';
import { mapGetters, mapActions } from 'vuex';
import { DamagesPermissions } from '@/modules/damages/damages-permissions';
import { i18n } from '@/i18n';

const { fields } = DamagesModel;

export default {
  name: 'app-damages-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'damages/list/rows',
      count: 'damages/list/count',
      loading: 'damages/list/loading',
      pagination: 'damages/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'damages/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DamagesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DamagesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'damages/list/doChangeSort',
      doChangePaginationCurrentPage:
        'damages/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'damages/list/doChangePaginationPageSize',
      doMountTable: 'damages/list/doMountTable',
      doDestroy: 'damages/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DamagesModel.presenter(row, fieldName);
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
