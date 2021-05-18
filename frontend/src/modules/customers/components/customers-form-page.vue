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
        <app-i18n code="entities.customers.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.customers.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.customers.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.customers.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-customers-form
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
import CustomersForm from '@/modules/customers/components/customers-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-customers-form-page',

  props: ['id'],

  components: {
    [CustomersForm.name]: CustomersForm,
  },

  computed: {
    ...mapGetters({
      record: 'customers/form/record',
      findLoading: 'customers/form/findLoading',
      saveLoading: 'customers/form/saveLoading',
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
      doFind: 'customers/form/doFind',
      doNew: 'customers/form/doNew',
      doUpdate: 'customers/form/doUpdate',
      doCreate: 'customers/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/customers');
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
