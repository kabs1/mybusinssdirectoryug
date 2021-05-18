<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/currency' }">
        <app-i18n code="entities.currency.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.currency.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.currency.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.currency.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.currency.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-currency-form
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
import CurrencyForm from '@/modules/currency/components/currency-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-currency-form-page',

  props: ['id'],

  components: {
    [CurrencyForm.name]: CurrencyForm,
  },

  computed: {
    ...mapGetters({
      record: 'currency/form/record',
      findLoading: 'currency/form/findLoading',
      saveLoading: 'currency/form/saveLoading',
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
      doFind: 'currency/form/doFind',
      doNew: 'currency/form/doNew',
      doUpdate: 'currency/form/doUpdate',
      doCreate: 'currency/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/currency');
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
