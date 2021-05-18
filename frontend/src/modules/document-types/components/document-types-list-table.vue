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
        :label="fields.documentTypeTitle.label"
        :prop="fields.documentTypeTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'documentTypeTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.documentTypeNote.label"
        :prop="fields.documentTypeNote.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'documentTypeNote') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/document-types/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { DocumentTypesModel } from '@/modules/document-types/document-types-model';
import { mapGetters, mapActions } from 'vuex';
import { DocumentTypesPermissions } from '@/modules/document-types/document-types-permissions';
import { i18n } from '@/i18n';

const { fields } = DocumentTypesModel;

export default {
  name: 'app-document-types-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'documentTypes/list/rows',
      count: 'documentTypes/list/count',
      loading: 'documentTypes/list/loading',
      pagination: 'documentTypes/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'documentTypes/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DocumentTypesPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DocumentTypesPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'documentTypes/list/doChangeSort',
      doChangePaginationCurrentPage:
        'documentTypes/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'documentTypes/list/doChangePaginationPageSize',
      doMountTable: 'documentTypes/list/doMountTable',
      doDestroy: 'documentTypes/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DocumentTypesModel.presenter(row, fieldName);
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
