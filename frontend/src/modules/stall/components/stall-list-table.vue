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
        :label="fields.stallCover.label"
        :prop="fields.stallCover.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'stallCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stallName.label"
        :prop="fields.stallName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stallName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.stallType.label"
        :prop="fields.stallType.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'stallType') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stallLocation.label"
        :prop="fields.stallLocation.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stallLocation') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.stallPhoneNumber.label"
        :prop="fields.stallPhoneNumber.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stallPhoneNumber') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.stallIsStatus.label"
        :prop="fields.stallIsStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="warning">{{ presenter(scope.row, 'stallIsStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stallPos.label"
        :prop="fields.stallPos.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'stallPos') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.stallLoyaltyPointValue.label"
        :prop="fields.stallLoyaltyPointValue.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'stallLoyaltyPointValue') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/stall/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/stall/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle>
              </el-button>
            </router-link>

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
import { StallModel } from '@/modules/stall/stall-model';
import { mapGetters, mapActions } from 'vuex';
import { StallPermissions } from '@/modules/stall/stall-permissions';
import { i18n } from '@/i18n';

const { fields } = StallModel;

export default {
  name: 'app-stall-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'stall/list/rows',
      count: 'stall/list/count',
      loading: 'stall/list/loading',
      pagination: 'stall/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'stall/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new StallPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new StallPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'stall/list/doChangeSort',
      doChangePaginationCurrentPage:
        'stall/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'stall/list/doChangePaginationPageSize',
      doMountTable: 'stall/list/doMountTable',
      doDestroy: 'stall/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return StallModel.presenter(row, fieldName);
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
