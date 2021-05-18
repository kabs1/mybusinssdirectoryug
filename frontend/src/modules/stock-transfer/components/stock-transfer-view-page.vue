<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stock-transfer' }">
        <app-i18n code="entities.stockTransfer.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockTransfer.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockTransfer.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-stock-transfer-view-toolbar v-if="record"></app-stock-transfer-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.transferRef.label" :value="presenter(record, 'transferRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.transferProduct.label"
          :permission="fields.transferProduct.readPermission"
          :url="fields.transferProduct.viewUrl"
          :value="presenter(record, 'transferProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.transferStallFrom.label"
          :permission="fields.transferStallFrom.readPermission"
          :url="fields.transferStallFrom.viewUrl"
          :value="presenter(record, 'transferStallFrom')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.transferStallTo.label"
          :permission="fields.transferStallTo.readPermission"
          :url="fields.transferStallTo.viewUrl"
          :value="presenter(record, 'transferStallTo')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.transferUnits.label" :value="presenter(record, 'transferUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.transferNote.label" :value="presenter(record, 'transferNote')"></app-view-item-text>

        <app-view-item-text :label="fields.transferStatus.label" :value="presenter(record, 'transferStatus')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.transferExpenses.label"
          :permission="fields.transferExpenses.readPermission"
          :url="fields.transferExpenses.viewUrl"
          :value="presenter(record, 'transferExpenses')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StockTransferViewToolbar from '@/modules/stock-transfer/components/stock-transfer-view-toolbar.vue';
import { StockTransferModel } from '@/modules/stock-transfer/stock-transfer-model';

const { fields } = StockTransferModel;

export default {
  name: 'app-stock-transfer-view-page',

  props: ['id'],

  components: {
    [StockTransferViewToolbar.name]: StockTransferViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'stockTransfer/view/record',
      loading: 'stockTransfer/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'stockTransfer/view/doFind',
    }),

    presenter(record, fieldName) {
      return StockTransferModel.presenter(record, fieldName);
    },
  },
};
</script>
