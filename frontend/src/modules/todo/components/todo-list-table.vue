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
        :label="fields.todoTitle.label"
        :prop="fields.todoTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'todoTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.todoStatus.label"
        :prop="fields.todoStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'todoStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.todoStartDate.label"
        :prop="fields.todoStartDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'todoStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.todoEndDate.label"
        :prop="fields.todoEndDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'todoEndDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.todoRating.label"
        :prop="fields.todoRating.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-progress type="circle" :percentage=" presenter(scope.row, 'todoRating') " width="60"></el-progress>
        </template>
      </el-table-column>

      <el-table-column :label="fields.todoStall.label" :prop="fields.todoStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.todoStall.label"
            :permission="fields.todoStall.readPermission"
            :url="fields.todoStall.viewUrl"
            :value="presenter(scope.row, 'todoStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/todo/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/todo/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { TodoModel } from '@/modules/todo/todo-model';
import { mapGetters, mapActions } from 'vuex';
import { TodoPermissions } from '@/modules/todo/todo-permissions';
import { i18n } from '@/i18n';

const { fields } = TodoModel;

export default {
  name: 'app-todo-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'todo/list/rows',
      count: 'todo/list/count',
      loading: 'todo/list/loading',
      pagination: 'todo/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'todo/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new TodoPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new TodoPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'todo/list/doChangeSort',
      doChangePaginationCurrentPage:
        'todo/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'todo/list/doChangePaginationPageSize',
      doMountTable: 'todo/list/doMountTable',
      doDestroy: 'todo/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return TodoModel.presenter(row, fieldName);
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
