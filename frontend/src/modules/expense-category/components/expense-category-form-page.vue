<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/expense-category' }">
        <app-i18n code="entities.expenseCategory.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenseCategory.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.expenseCategory.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenseCategory.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.expenseCategory.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-expense-category-form
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
import ExpenseCategoryForm from '@/modules/expense-category/components/expense-category-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-expense-category-form-page',

  props: ['id'],

  components: {
    [ExpenseCategoryForm.name]: ExpenseCategoryForm,
  },

  computed: {
    ...mapGetters({
      record: 'expenseCategory/form/record',
      findLoading: 'expenseCategory/form/findLoading',
      saveLoading: 'expenseCategory/form/saveLoading',
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
      doFind: 'expenseCategory/form/doFind',
      doNew: 'expenseCategory/form/doNew',
      doUpdate: 'expenseCategory/form/doUpdate',
      doCreate: 'expenseCategory/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/expense-category');
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
