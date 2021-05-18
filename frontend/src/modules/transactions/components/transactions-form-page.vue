<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/transactions' }">
        <app-i18n code="entities.transactions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.transactions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.transactions.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.transactions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.transactions.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-transactions-form
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
import TransactionsForm from '@/modules/transactions/components/transactions-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-transactions-form-page',

  props: ['id'],

  components: {
    [TransactionsForm.name]: TransactionsForm,
  },

  computed: {
    ...mapGetters({
      record: 'transactions/form/record',
      findLoading: 'transactions/form/findLoading',
      saveLoading: 'transactions/form/saveLoading',
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
      doFind: 'transactions/form/doFind',
      doNew: 'transactions/form/doNew',
      doUpdate: 'transactions/form/doUpdate',
      doCreate: 'transactions/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/transactions');
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
