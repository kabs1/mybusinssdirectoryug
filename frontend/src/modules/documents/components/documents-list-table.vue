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
        :label="fields.documentTitle.label"
        :prop="fields.documentTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'documentTitle') }}</template>
      </el-table-column>

      <el-table-column :label="fields.documentType.label" :prop="fields.documentType.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.documentType.label"
            :permission="fields.documentType.readPermission"
            :url="fields.documentType.viewUrl"
            :value="presenter(scope.row, 'documentType')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.docStall.label" :prop="fields.docStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.docStall.label"
            :permission="fields.docStall.readPermission"
            :url="fields.docStall.viewUrl"
            :value="presenter(scope.row, 'docStall')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/documents/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/documents/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { DocumentsModel } from '@/modules/documents/documents-model';
import { mapGetters, mapActions } from 'vuex';
import { DocumentsPermissions } from '@/modules/documents/documents-permissions';
import { i18n } from '@/i18n';

const { fields } = DocumentsModel;

export default {
  name: 'app-documents-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'documents/list/rows',
      count: 'documents/list/count',
      loading: 'documents/list/loading',
      pagination: 'documents/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'documents/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DocumentsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DocumentsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'documents/list/doChangeSort',
      doChangePaginationCurrentPage:
        'documents/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'documents/list/doChangePaginationPageSize',
      doMountTable: 'documents/list/doMountTable',
      doDestroy: 'documents/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DocumentsModel.presenter(row, fieldName);
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
