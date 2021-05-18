<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/payment-methods' }">
        <app-i18n code="entities.paymentMethods.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.paymentMethods.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.paymentMethods.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-payment-methods-view-toolbar v-if="record"></app-payment-methods-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.paymentMethodLogo.label" :value="presenter(record, 'paymentMethodLogo')"></app-view-item-image>

        <app-view-item-text :label="fields.paymentMethodTitle.label" :value="presenter(record, 'paymentMethodTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodType.label" :value="presenter(record, 'paymentMethodType')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodParams.label" :value="presenter(record, 'paymentMethodParams')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodResponse.label" :value="presenter(record, 'paymentMethodResponse')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodStatus.label" :value="presenter(record, 'paymentMethodStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodHeader.label" :value="presenter(record, 'paymentMethodHeader')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodApi.label" :value="presenter(record, 'paymentMethodApi')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodCustom1.label" :value="presenter(record, 'paymentMethodCustom1')"></app-view-item-text>

        <app-view-item-text :label="fields.paymentMethodCustom2.label" :value="presenter(record, 'paymentMethodCustom2')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentMethodsViewToolbar from '@/modules/payment-methods/components/payment-methods-view-toolbar.vue';
import { PaymentMethodsModel } from '@/modules/payment-methods/payment-methods-model';

const { fields } = PaymentMethodsModel;

export default {
  name: 'app-payment-methods-view-page',

  props: ['id'],

  components: {
    [PaymentMethodsViewToolbar.name]: PaymentMethodsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'paymentMethods/view/record',
      loading: 'paymentMethods/view/loading',
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
      doFind: 'paymentMethods/view/doFind',
    }),

    presenter(record, fieldName) {
      return PaymentMethodsModel.presenter(record, fieldName);
    },
  },
};
</script>
