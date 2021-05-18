<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/purchases' }">
        <app-i18n code="entities.purchases.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.purchases.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.purchases.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-purchases-view-toolbar v-if="record"></app-purchases-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.purchasesRef.label" :value="presenter(record, 'purchasesRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.purchaseProduct.label"
          :permission="fields.purchaseProduct.readPermission"
          :url="fields.purchaseProduct.viewUrl"
          :value="presenter(record, 'purchaseProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.purchaseSupplier.label"
          :permission="fields.purchaseSupplier.readPermission"
          :url="fields.purchaseSupplier.viewUrl"
          :value="presenter(record, 'purchaseSupplier')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.purchasePaymentStatus.label" :value="presenter(record, 'purchasePaymentStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.purchaseUnits.label" :value="presenter(record, 'purchaseUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.purchaseTotalAmount.label" :value="presenter(record, 'purchaseTotalAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.purchaseReturnsUnits.label" :value="presenter(record, 'purchaseReturnsUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.purchaseNote.label" :value="presenter(record, 'purchaseNote')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.purchaseStall.label"
          :permission="fields.purchaseStall.readPermission"
          :url="fields.purchaseStall.viewUrl"
          :value="presenter(record, 'purchaseStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.purchaseReturnsReason.label" :value="presenter(record, 'purchaseReturnsReason')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PurchasesViewToolbar from '@/modules/purchases/components/purchases-view-toolbar.vue';
import { PurchasesModel } from '@/modules/purchases/purchases-model';

const { fields } = PurchasesModel;

export default {
  name: 'app-purchases-view-page',

  props: ['id'],

  components: {
    [PurchasesViewToolbar.name]: PurchasesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'purchases/view/record',
      loading: 'purchases/view/loading',
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
      doFind: 'purchases/view/doFind',
    }),

    presenter(record, fieldName) {
      return PurchasesModel.presenter(record, fieldName);
    },
  },
};
</script>
