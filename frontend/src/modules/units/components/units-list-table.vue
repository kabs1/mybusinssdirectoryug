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
        :label="fields.unitsTitle.label"
        :prop="fields.unitsTitle.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'unitsTitle') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.unitsCode.label"
        :prop="fields.unitsCode.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'unitsCode') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.unitsType.label"
        :prop="fields.unitsType.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'unitsType') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">

            <router-link :to="`/units/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { UnitsModel } from '@/modules/units/units-model';
import { mapGetters, mapActions } from 'vuex';
import { UnitsPermissions } from '@/modules/units/units-permissions';
import { i18n } from '@/i18n';

const { fields } = UnitsModel;

export default {
  name: 'app-units-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'units/list/rows',
      count: 'units/list/count',
      loading: 'units/list/loading',
      pagination: 'units/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'units/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new UnitsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new UnitsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'units/list/doChangeSort',
      doChangePaginationCurrentPage:
        'units/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'units/list/doChangePaginationPageSize',
      doMountTable: 'units/list/doMountTable',
      doDestroy: 'units/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return UnitsModel.presenter(row, fieldName);
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
