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
        <app-i18n code="entities.paymentMethods.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.paymentMethods.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.paymentMethods.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.paymentMethods.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-payment-methods-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentMethodsForm from '@/modules/payment-methods/components/payment-methods-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-payment-methods-form-page',

  props: ['id'],

  components: {
    [PaymentMethodsForm.name]: PaymentMethodsForm,
  },

  computed: {
    ...mapGetters({
      record: 'paymentMethods/form/record',
      findLoading: 'paymentMethods/form/findLoading',
      saveLoading: 'paymentMethods/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'paymentMethods/form/doFind',
      doNew: 'paymentMethods/form/doNew',
      doUpdate: 'paymentMethods/form/doUpdate',
      doCreate: 'paymentMethods/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/payment-methods');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
