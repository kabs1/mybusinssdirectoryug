<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/expenses' }">
        <app-i18n code="entities.expenses.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenses.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.expenses.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenses.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.expenses.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-expenses-form
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
import ExpensesForm from '@/modules/expenses/components/expenses-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-expenses-form-page',

  props: ['id'],

  components: {
    [ExpensesForm.name]: ExpensesForm,
  },

  computed: {
    ...mapGetters({
      record: 'expenses/form/record',
      findLoading: 'expenses/form/findLoading',
      saveLoading: 'expenses/form/saveLoading',
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
      doFind: 'expenses/form/doFind',
      doNew: 'expenses/form/doNew',
      doUpdate: 'expenses/form/doUpdate',
      doCreate: 'expenses/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/expenses');
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
