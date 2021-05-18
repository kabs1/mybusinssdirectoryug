<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stock-adjustments' }">
        <app-i18n code="entities.stockAdjustments.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockAdjustments.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockAdjustments.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-stock-adjustments-view-toolbar v-if="record"></app-stock-adjustments-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.stockAdjustmentRef.label" :value="presenter(record, 'stockAdjustmentRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.stockAdjustmentProduct.label"
          :permission="fields.stockAdjustmentProduct.readPermission"
          :url="fields.stockAdjustmentProduct.viewUrl"
          :value="presenter(record, 'stockAdjustmentProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.stockAdjustmentType.label" :value="presenter(record, 'stockAdjustmentType')"></app-view-item-text>

        <app-view-item-text :label="fields.stockAdjustmentUnits.label" :value="presenter(record, 'stockAdjustmentUnits')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.adjustmentStall.label"
          :permission="fields.adjustmentStall.readPermission"
          :url="fields.adjustmentStall.viewUrl"
          :value="presenter(record, 'adjustmentStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.stockAdjustmentsReason.label" :value="presenter(record, 'stockAdjustmentsReason')"></app-view-item-text>

        <app-view-item-text :label="fields.stockAdjustmentClass.label" :value="presenter(record, 'stockAdjustmentClass')"></app-view-item-text>

        <app-view-item-text :label="fields.stockAdjustmentLoss.label" :value="presenter(record, 'stockAdjustmentLoss')"></app-view-item-text>

        <app-view-item-text :label="fields.stockAdjustmentRecorverdAmount.label" :value="presenter(record, 'stockAdjustmentRecorverdAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StockAdjustmentsViewToolbar from '@/modules/stock-adjustments/components/stock-adjustments-view-toolbar.vue';
import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';

const { fields } = StockAdjustmentsModel;

export default {
  name: 'app-stock-adjustments-view-page',

  props: ['id'],

  components: {
    [StockAdjustmentsViewToolbar.name]: StockAdjustmentsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'stockAdjustments/view/record',
      loading: 'stockAdjustments/view/loading',
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
      doFind: 'stockAdjustments/view/doFind',
    }),

    presenter(record, fieldName) {
      return StockAdjustmentsModel.presenter(record, fieldName);
    },
  },
};
</script>
