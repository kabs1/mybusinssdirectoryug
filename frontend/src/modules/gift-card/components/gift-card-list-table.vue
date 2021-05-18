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
        :label="fields.giftCardName.label"
        :prop="fields.giftCardName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'giftCardName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.giftCardNo.label"
        :prop="fields.giftCardNo.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'giftCardNo') }}</template>
      </el-table-column>

      <el-table-column
              :label="fields.giftCardStatus.label"
              :prop="fields.giftCardStatus.name"
              sortable="center"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{ presenter(scope.row, 'giftCardStatus') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.giftCardAmmount.label"
        :prop="fields.giftCardAmmount.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'giftCardAmmount') }}</template>
      </el-table-column>

      <el-table-column :label="fields.giftCardCustomer.label" :prop="fields.giftCardCustomer.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.giftCardCustomer.label"
            :permission="fields.giftCardCustomer.readPermission"
            :url="fields.giftCardCustomer.viewUrl"
            :value="presenter(scope.row, 'giftCardCustomer')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.giftCardStartDate.label"
        :prop="fields.giftCardStartDate.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'giftCardStartDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.giftCardEndDate.label"
        :prop="fields.giftCardEndDate.name"
        sortable="center"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'giftCardEndDate') }}</template>
      </el-table-column>

      <el-table-column :label="fields.giftCardStall.label" :prop="fields.giftCardStall.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.giftCardStall.label"
            :permission="fields.giftCardStall.readPermission"
            :url="fields.giftCardStall.viewUrl"
            :value="presenter(scope.row, 'giftCardStall')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/gift-card/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>

            <router-link :to="`/gift-card/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { GiftCardModel } from '@/modules/gift-card/gift-card-model';
import { mapGetters, mapActions } from 'vuex';
import { GiftCardPermissions } from '@/modules/gift-card/gift-card-permissions';
import { i18n } from '@/i18n';

const { fields } = GiftCardModel;

export default {
  name: 'app-gift-card-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'giftCard/list/rows',
      count: 'giftCard/list/count',
      loading: 'giftCard/list/loading',
      pagination: 'giftCard/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'giftCard/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new GiftCardPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new GiftCardPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'giftCard/list/doChangeSort',
      doChangePaginationCurrentPage:
        'giftCard/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'giftCard/list/doChangePaginationPageSize',
      doMountTable: 'giftCard/list/doMountTable',
      doDestroy: 'giftCard/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return GiftCardModel.presenter(row, fieldName);
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
