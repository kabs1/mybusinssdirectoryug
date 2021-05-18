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
        :label="fields.memosCover.label"
        :prop="fields.memosCover.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'memosCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.memosTitle.label"
        :prop="fields.memosTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'memosTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.memosStartDate.label"
        :prop="fields.memosStartDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'memosStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.memosEndDate.label"
        :prop="fields.memosEndDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'memosEndDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.memosTo.label"
        :prop="fields.memosTo.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'memosTo') }}</template>
      </el-table-column>

      <el-table-column :label="fields.memoStall.label" :prop="fields.memoStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.memoStall.label"
            :permission="fields.memoStall.readPermission"
            :url="fields.memoStall.viewUrl"
            :value="presenter(scope.row, 'memoStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/memos/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/memos/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { MemosModel } from '@/modules/memos/memos-model';
import { mapGetters, mapActions } from 'vuex';
import { MemosPermissions } from '@/modules/memos/memos-permissions';
import { i18n } from '@/i18n';

const { fields } = MemosModel;

export default {
  name: 'app-memos-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'memos/list/rows',
      count: 'memos/list/count',
      loading: 'memos/list/loading',
      pagination: 'memos/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'memos/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new MemosPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new MemosPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'memos/list/doChangeSort',
      doChangePaginationCurrentPage:
        'memos/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'memos/list/doChangePaginationPageSize',
      doMountTable: 'memos/list/doMountTable',
      doDestroy: 'memos/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return MemosModel.presenter(row, fieldName);
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
