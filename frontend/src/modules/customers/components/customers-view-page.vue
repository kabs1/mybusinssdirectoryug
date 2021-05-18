<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/customers' }">
        <app-i18n code="entities.customers.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.customers.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customers.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-customers-view-toolbar v-if="record"></app-customers-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >

        <div style="margin-left: 50px">



        <app-view-item-image :label="fields.customerProfile.label" :value="presenter(record, 'customerProfile')"></app-view-item-image>

        <app-view-item-text :label="fields.customerNames.label" :value="presenter(record, 'customerNames')"></app-view-item-text>

        <app-view-item-text :label="fields.customerEmail.label" :value="presenter(record, 'customerEmail')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.customerUserId.label"
          :permission="fields.customerUserId.readPermission"
          :url="fields.customerUserId.viewUrl"
          :value="presenter(record, 'customerUserId')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.customerPhoneNumber.label" :value="presenter(record, 'customerPhoneNumber')"></app-view-item-text>

        <app-view-item-text :label="fields.customerLocation.label" :value="presenter(record, 'customerLocation')"></app-view-item-text>

        <app-view-item-text :label="fields.customerDiscount.label" :value="presenter(record, 'customerDiscount')"></app-view-item-text>

        <app-view-item-text :label="fields.customerStatus.label" :value="presenter(record, 'customerStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.customerCode.label" :value="presenter(record, 'customerCode')"></app-view-item-text>

        <app-view-item-text :label="fields.customerAccountBalance.label" :value="presenter(record, 'customerAccountBalance')"></app-view-item-text>

        <app-view-item-text :label="fields.customerCustomField.label" :value="presenter(record, 'customerCustomField')"></app-view-item-text>

        <app-view-item-file :label="fields.customerDocs.label" :value="presenter(record, 'customerDocs')"></app-view-item-file>

        <app-view-item-text :label="fields.customerLoyaltyPoints.label" :value="presenter(record, 'customerLoyaltyPoints')"></app-view-item-text>

        <app-view-item-text :label="fields.customerCreditBalance.label" :value="presenter(record, 'customerCreditBalance')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>

        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomersViewToolbar from '@/modules/customers/components/customers-view-toolbar.vue';
import { CustomersModel } from '@/modules/customers/customers-model';

const { fields } = CustomersModel;

export default {
  name: 'app-customers-view-page',

  props: ['id'],

  components: {
    [CustomersViewToolbar.name]: CustomersViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'customers/view/record',
      loading: 'customers/view/loading',
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
      doFind: 'customers/view/doFind',
    }),

    presenter(record, fieldName) {
      return CustomersModel.presenter(record, fieldName);
    },
  },
};
</script>
