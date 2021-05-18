<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/payroll' }">
        <app-i18n code="entities.payroll.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.payroll.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.payroll.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.payroll.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.payroll.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-payroll-form
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
import PayrollForm from '@/modules/payroll/components/payroll-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-payroll-form-page',

  props: ['id'],

  components: {
    [PayrollForm.name]: PayrollForm,
  },

  computed: {
    ...mapGetters({
      record: 'payroll/form/record',
      findLoading: 'payroll/form/findLoading',
      saveLoading: 'payroll/form/saveLoading',
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
      doFind: 'payroll/form/doFind',
      doNew: 'payroll/form/doNew',
      doUpdate: 'payroll/form/doUpdate',
      doCreate: 'payroll/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/payroll');
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
