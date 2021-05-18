<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/product-logs' }">
        <app-i18n code="entities.productLogs.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productLogs.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productLogs.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-product-logs-view-toolbar v-if="record"></app-product-logs-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogRef.label" :value="presenter(record, 'productLogRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.productLogProduct.label"
          :permission="fields.productLogProduct.readPermission"
          :url="fields.productLogProduct.viewUrl"
          :value="presenter(record, 'productLogProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.productLogStall.label"
          :permission="fields.productLogStall.readPermission"
          :url="fields.productLogStall.viewUrl"
          :value="presenter(record, 'productLogStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.productLogSellingPrice.label" :value="presenter(record, 'productLogSellingPrice')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogMargin.label" :value="presenter(record, 'productLogMargin')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogBuyingPrice.label" :value="presenter(record, 'productLogBuyingPrice')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogCurrentStock.label" :value="presenter(record, 'productLogCurrentStock')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogSoldUnits.label" :value="presenter(record, 'productLogSoldUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogAdjustedUnits.label" :value="presenter(record, 'productLogAdjustedUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogDamagedUnits.label" :value="presenter(record, 'productLogDamagedUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogReturnedUnits.label" :value="presenter(record, 'productLogReturnedUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogPurchasedUnits.label" :value="presenter(record, 'productLogPurchasedUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.productLogTransferredUnits.label" :value="presenter(record, 'productLogTransferredUnits')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.productLogPurchaseRef.label"
          :permission="fields.productLogPurchaseRef.readPermission"
          :url="fields.productLogPurchaseRef.viewUrl"
          :value="presenter(record, 'productLogPurchaseRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.productLogSaleRef.label"
          :permission="fields.productLogSaleRef.readPermission"
          :url="fields.productLogSaleRef.viewUrl"
          :value="presenter(record, 'productLogSaleRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.productLogReturnsRef.label"
          :permission="fields.productLogReturnsRef.readPermission"
          :url="fields.productLogReturnsRef.viewUrl"
          :value="presenter(record, 'productLogReturnsRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.productLogAdjustRef.label"
          :permission="fields.productLogAdjustRef.readPermission"
          :url="fields.productLogAdjustRef.viewUrl"
          :value="presenter(record, 'productLogAdjustRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.productLogTransferredRef.label"
          :permission="fields.productLogTransferredRef.readPermission"
          :url="fields.productLogTransferredRef.viewUrl"
          :value="presenter(record, 'productLogTransferredRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.productLogDamageRef.label"
          :permission="fields.productLogDamageRef.readPermission"
          :url="fields.productLogDamageRef.viewUrl"
          :value="presenter(record, 'productLogDamageRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductLogsViewToolbar from '@/modules/product-logs/components/product-logs-view-toolbar.vue';
import { ProductLogsModel } from '@/modules/product-logs/product-logs-model';

const { fields } = ProductLogsModel;

export default {
  name: 'app-product-logs-view-page',

  props: ['id'],

  components: {
    [ProductLogsViewToolbar.name]: ProductLogsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'productLogs/view/record',
      loading: 'productLogs/view/loading',
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
      doFind: 'productLogs/view/doFind',
    }),

    presenter(record, fieldName) {
      return ProductLogsModel.presenter(record, fieldName);
    },
  },
};
</script>
