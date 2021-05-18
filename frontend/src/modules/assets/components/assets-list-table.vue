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
        :label="fields.assetImage.label"
        :prop="fields.assetImage.name"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'assetImage')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.assetName.label"
        :prop="fields.assetName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'assetName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.assetValue.label"
        :prop="fields.assetValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'assetValue') }}</template>
      </el-table-column>

      <el-table-column :label="fields.assetsStall.label" :prop="fields.assetsStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.assetsStall.label"
            :permission="fields.assetsStall.readPermission"
            :url="fields.assetsStall.viewUrl"
            :value="presenter(scope.row, 'assetsStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.assetPurchaseDate.label"
        :prop="fields.assetPurchaseDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'assetPurchaseDate') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/assets/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/assets/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { AssetsModel } from '@/modules/assets/assets-model';
import { mapGetters, mapActions } from 'vuex';
import { AssetsPermissions } from '@/modules/assets/assets-permissions';
import { i18n } from '@/i18n';

const { fields } = AssetsModel;

export default {
  name: 'app-assets-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'assets/list/rows',
      count: 'assets/list/count',
      loading: 'assets/list/loading',
      pagination: 'assets/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'assets/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AssetsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new AssetsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'assets/list/doChangeSort',
      doChangePaginationCurrentPage:
        'assets/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'assets/list/doChangePaginationPageSize',
      doMountTable: 'assets/list/doMountTable',
      doDestroy: 'assets/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AssetsModel.presenter(row, fieldName);
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
