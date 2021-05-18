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
        :label="fields.supplierProfile.label"
        :prop="fields.supplierProfile.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar :value="presenter(scope.row, 'supplierProfile')"></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierNames.label"
        :prop="fields.supplierNames.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'supplierNames') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierBusinessName.label"
        :prop="fields.supplierBusinessName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'supplierBusinessName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierEmail.label"
        :prop="fields.supplierEmail.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'supplierEmail') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierPayType.label"
        :prop="fields.supplierPayType.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="warning">{{ presenter(scope.row, 'supplierPayType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierStatus.label"
        :prop="fields.supplierStatus.name"
        sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'supplierStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/suppliers/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/suppliers/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="danger" icon="el-icon-fa-trash" circle
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
import { SuppliersModel } from '@/modules/suppliers/suppliers-model';
import { mapGetters, mapActions } from 'vuex';
import { SuppliersPermissions } from '@/modules/suppliers/suppliers-permissions';
import { i18n } from '@/i18n';
import AppListItemAppAvatar from "../../../shared/list/list-item-avatar";

const { fields } = SuppliersModel;

export default {
  name: 'app-suppliers-list-table',
  components: {AppListItemAppAvatar},
  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'suppliers/list/rows',
      count: 'suppliers/list/count',
      loading: 'suppliers/list/loading',
      pagination: 'suppliers/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'suppliers/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new SuppliersPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new SuppliersPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'suppliers/list/doChangeSort',
      doChangePaginationCurrentPage:
        'suppliers/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'suppliers/list/doChangePaginationPageSize',
      doMountTable: 'suppliers/list/doMountTable',
      doDestroy: 'suppliers/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return SuppliersModel.presenter(row, fieldName);
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
