<template>
  <div>
    <el-table
      :data="rows"
      @sort-change="doChangeSort"
      row-key="id"
      stripe
      v-loading="loading"
    >
      <el-table-column
        :label="fields.timestamp.label"
        :prop="fields.timestamp.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'timestamp') }}</template>
      </el-table-column>
      <el-table-column
        :label="fields.createdByEmail.label"
        :prop="fields.createdByEmail.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdByEmail') }}</template>
      </el-table-column>
      <el-table-column
        :label="fields.entityName.label"
        :prop="fields.entityName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'entityName') }}</template>
      </el-table-column>
      <el-table-column :label="fields.action.label" :prop="fields.action.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'action') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="120">
        <template slot-scope="scope">
          <el-button @click="view(scope.row[fields.values.name])" type="primary" icon="el-icon-view"  circle >
          </el-button>
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
import { AuditLogModel } from '@/modules/audit-log/audit-log-model';
import { mapGetters, mapActions } from 'vuex';

const { fields } = AuditLogModel;

export default {
  name: 'app-audit-log-table',

  computed: {
    ...mapGetters({
      rows: 'auditLog/rows',
      count: 'auditLog/count',
      loading: 'auditLog/loading',
      pagination: 'auditLog/pagination',
      isMobile: 'layout/isMobile',
      paginationLayout: 'layout/paginationLayout',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'auditLog/doChangeSort',
      doChangePaginationCurrentPage:
        'auditLog/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'auditLog/doChangePaginationPageSize',
    }),

    presenter(row, fieldName) {
      return AuditLogModel.presenter(row, fieldName);
    },

    view(values) {
      const data = JSON.stringify(values, null, 2);
      const jsonWindow = window.open(
        '',
        '_blank',
        'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400',
      );
      jsonWindow.document.write(`<pre>${data}</pre>`);
    },
  },
};
</script>

<style>
</style>
