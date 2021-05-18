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
        :label="fields.returnRefNo.label"
        :prop="fields.returnRefNo.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'returnRefNo') }}</template>
      </el-table-column>

      <el-table-column :label="fields.returnProduct.label" :prop="fields.returnProduct.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.returnProduct.label"
            :permission="fields.returnProduct.readPermission"
            :url="fields.returnProduct.viewUrl"
            :value="presenter(scope.row, 'returnProduct')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.returnUnits.label"
        :prop="fields.returnUnits.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'returnUnits') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.returnsFrom.label"
        :prop="fields.returnsFrom.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag >{{ presenter(scope.row, 'returnsFrom') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.returnIdentifier.label"
        :prop="fields.returnIdentifier.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'returnIdentifier') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="fields.returnStall.label" :prop="fields.returnStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.returnStall.label"
            :permission="fields.returnStall.readPermission"
            :url="fields.returnStall.viewUrl"
            :value="presenter(scope.row, 'returnStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

<!--      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">-->
<!--        <template slot-scope="scope">-->
<!--          <div class="table-actions">-->
<!--&lt;!&ndash;            <router-link :to="`/returns/${scope.row.id}`">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-button type="primary" icon="el-icon-view" circle>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-button>&ndash;&gt;-->
<!--&lt;!&ndash;            </router-link>&ndash;&gt;-->

<!--&lt;!&ndash;            <router-link :to="`/returns/${scope.row.id}/edit`" v-if="hasPermissionToEdit">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-button type="info" icon="el-icon-edit" circle>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-button>&ndash;&gt;-->
<!--&lt;!&ndash;            </router-link>&ndash;&gt;-->

<!--&lt;!&ndash;            <el-button&ndash;&gt;-->
<!--&lt;!&ndash;              :disabled="destroyLoading"&ndash;&gt;-->
<!--&lt;!&ndash;              @click="doDestroyWithConfirm(scope.row.id)"&ndash;&gt;-->
<!--&lt;!&ndash;              type="danger" icon="el-icon-delete" circle&ndash;&gt;-->
<!--&lt;!&ndash;              v-if="hasPermissionToDestroy"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;            </el-button>&ndash;&gt;-->
<!--          </div>-->
<!--        </template>-->
<!--      </el-table-column>-->
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
import { ReturnsModel } from '@/modules/returns/returns-model';
import { mapGetters, mapActions } from 'vuex';
import { ReturnsPermissions } from '@/modules/returns/returns-permissions';
import { i18n } from '@/i18n';

const { fields } = ReturnsModel;

export default {
  name: 'app-returns-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'returns/list/rows',
      count: 'returns/list/count',
      loading: 'returns/list/loading',
      pagination: 'returns/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'returns/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ReturnsPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ReturnsPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'returns/list/doChangeSort',
      doChangePaginationCurrentPage:
        'returns/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'returns/list/doChangePaginationPageSize',
      doMountTable: 'returns/list/doMountTable',
      doDestroy: 'returns/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ReturnsModel.presenter(row, fieldName);
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
