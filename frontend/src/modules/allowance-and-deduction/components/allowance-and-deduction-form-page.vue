<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/allowance-and-deduction' }">
        <app-i18n code="entities.allowanceAndDeduction.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.allowanceAndDeduction.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.allowanceAndDeduction.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.allowanceAndDeduction.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.allowanceAndDeduction.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-allowance-and-deduction-form
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
import AllowanceAndDeductionForm from '@/modules/allowance-and-deduction/components/allowance-and-deduction-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-allowance-and-deduction-form-page',

  props: ['id'],

  components: {
    [AllowanceAndDeductionForm.name]: AllowanceAndDeductionForm,
  },

  computed: {
    ...mapGetters({
      record: 'allowanceAndDeduction/form/record',
      findLoading: 'allowanceAndDeduction/form/findLoading',
      saveLoading: 'allowanceAndDeduction/form/saveLoading',
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
      doFind: 'allowanceAndDeduction/form/doFind',
      doNew: 'allowanceAndDeduction/form/doNew',
      doUpdate: 'allowanceAndDeduction/form/doUpdate',
      doCreate: 'allowanceAndDeduction/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/allowance-and-deduction');
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
