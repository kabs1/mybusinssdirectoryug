<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tax-class' }">
        <app-i18n code="entities.taxClass.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.taxClass.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.taxClass.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.taxClass.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.taxClass.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-tax-class-form
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
import TaxClassForm from '@/modules/tax-class/components/tax-class-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-tax-class-form-page',

  props: ['id'],

  components: {
    [TaxClassForm.name]: TaxClassForm,
  },

  computed: {
    ...mapGetters({
      record: 'taxClass/form/record',
      findLoading: 'taxClass/form/findLoading',
      saveLoading: 'taxClass/form/saveLoading',
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
      doFind: 'taxClass/form/doFind',
      doNew: 'taxClass/form/doNew',
      doUpdate: 'taxClass/form/doUpdate',
      doCreate: 'taxClass/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/tax-class');
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
