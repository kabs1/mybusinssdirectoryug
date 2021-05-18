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
        <app-i18n code="entities.sales.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.sales.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sales.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.sales.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-sales-form
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
import SalesForm from '@/modules/sales/components/sales-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-sales-form-page',

  props: ['id'],

  components: {
    [SalesForm.name]: SalesForm,
  },

  computed: {
    ...mapGetters({
      record: 'sales/form/record',
      findLoading: 'sales/form/findLoading',
      saveLoading: 'sales/form/saveLoading',
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
      doFind: 'sales/form/doFind',
      doNew: 'sales/form/doNew',
      doUpdate: 'sales/form/doUpdate',
      doCreate: 'sales/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/sales');
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
