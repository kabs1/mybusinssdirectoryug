<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/sales' }">
        <app-i18n code="entities.sales.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.sales.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sales.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-sales-view-toolbar v-if="record"></app-sales-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.salesInvoiceNo.label" :value="presenter(record, 'salesInvoiceNo')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.salesCustomer.label"
          :permission="fields.salesCustomer.readPermission"
          :url="fields.salesCustomer.viewUrl"
          :value="presenter(record, 'salesCustomer')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.salesPaymentStatus.label" :value="presenter(record, 'salesPaymentStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.salesTotalAmount.label" :value="presenter(record, 'salesTotalAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.salesSubTotalAmount.label" :value="presenter(record, 'salesSubTotalAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.salesTotalTax.label" :value="presenter(record, 'salesTotalTax')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.salesProducts.label"
          :permission="fields.salesProducts.readPermission"
          :url="fields.salesProducts.viewUrl"
          :value="presenter(record, 'salesProducts')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.salesTotalIUnits.label" :value="presenter(record, 'salesTotalIUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.saleNote.label" :value="presenter(record, 'saleNote')"></app-view-item-text>

        <app-view-item-text :label="fields.salesDiscount.label" :value="presenter(record, 'salesDiscount')"></app-view-item-text>

        <app-view-item-text :label="fields.salesPayload.label" :value="presenter(record, 'salesPayload')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.saleReturnsProducts.label"
          :permission="fields.saleReturnsProducts.readPermission"
          :url="fields.saleReturnsProducts.viewUrl"
          :value="presenter(record, 'saleReturnsProducts')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.saleReturnsUnits.label"
          :permission="fields.saleReturnsUnits.readPermission"
          :url="fields.saleReturnsUnits.viewUrl"
          :value="presenter(record, 'saleReturnsUnits')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.salesReturnReason.label" :value="presenter(record, 'salesReturnReason')"></app-view-item-text>

        <app-view-item-text :label="fields.salePaymentDetails.label" :value="presenter(record, 'salePaymentDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.salePaymentType.label" :value="presenter(record, 'salePaymentType')"></app-view-item-text>

        <app-view-item-text :label="fields.saleCreditBalance.label" :value="presenter(record, 'saleCreditBalance')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.saleDevice.label"
          :permission="fields.saleDevice.readPermission"
          :url="fields.saleDevice.viewUrl"
          :value="presenter(record, 'saleDevice')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.giftCard.label"
          :permission="fields.giftCard.readPermission"
          :url="fields.giftCard.viewUrl"
          :value="presenter(record, 'giftCard')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.salesCoupon.label"
          :permission="fields.salesCoupon.readPermission"
          :url="fields.salesCoupon.viewUrl"
          :value="presenter(record, 'salesCoupon')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.salesStall.label"
          :permission="fields.salesStall.readPermission"
          :url="fields.salesStall.viewUrl"
          :value="presenter(record, 'salesStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.salesRegister.label"
          :permission="fields.salesRegister.readPermission"
          :url="fields.salesRegister.viewUrl"
          :value="presenter(record, 'salesRegister')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-many
          :label="fields.salesProductsCount.label"
          :permission="fields.salesProductsCount.readPermission"
          :url="fields.salesProductsCount.viewUrl"
          :value="presenter(record, 'salesProductsCount')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.salesProductsValue.label"
          :permission="fields.salesProductsValue.readPermission"
          :url="fields.salesProductsValue.viewUrl"
          :value="presenter(record, 'salesProductsValue')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.salesPaymentMethod.label"
          :permission="fields.salesPaymentMethod.readPermission"
          :url="fields.salesPaymentMethod.viewUrl"
          :value="presenter(record, 'salesPaymentMethod')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.salesItemLoad.label" :value="presenter(record, 'salesItemLoad')"></app-view-item-text>

        <app-view-item-text :label="fields.salesReceipt.label" :value="presenter(record, 'salesReceipt')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SalesViewToolbar from '@/modules/sales/components/sales-view-toolbar.vue';
import { SalesModel } from '@/modules/sales/sales-model';

const { fields } = SalesModel;

export default {
  name: 'app-sales-view-page',

  props: ['id'],

  components: {
    [SalesViewToolbar.name]: SalesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'sales/view/record',
      loading: 'sales/view/loading',
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
      doFind: 'sales/view/doFind',
    }),

    presenter(record, fieldName) {
      return SalesModel.presenter(record, fieldName);
    },
  },
};
</script>
