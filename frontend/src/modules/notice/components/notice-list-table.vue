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
        :label="fields.noticeCover.label"
        :prop="fields.noticeCover.name"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'noticeCover')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.noticeTitle.label"
        :prop="fields.noticeTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'noticeTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.noticeType.label"
        :prop="fields.noticeType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'noticeType') }}</template>
      </el-table-column>

      <el-table-column :label="fields.noticeStall.label" :prop="fields.noticeStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.noticeStall.label"
            :permission="fields.noticeStall.readPermission"
            :url="fields.noticeStall.viewUrl"
            :value="presenter(scope.row, 'noticeStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/notice/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/notice/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { NoticeModel } from '@/modules/notice/notice-model';
import { mapGetters, mapActions } from 'vuex';
import { NoticePermissions } from '@/modules/notice/notice-permissions';
import { i18n } from '@/i18n';

const { fields } = NoticeModel;

export default {
  name: 'app-notice-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'notice/list/rows',
      count: 'notice/list/count',
      loading: 'notice/list/loading',
      pagination: 'notice/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'notice/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new NoticePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new NoticePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'notice/list/doChangeSort',
      doChangePaginationCurrentPage:
        'notice/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'notice/list/doChangePaginationPageSize',
      doMountTable: 'notice/list/doMountTable',
      doDestroy: 'notice/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return NoticeModel.presenter(row, fieldName);
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
