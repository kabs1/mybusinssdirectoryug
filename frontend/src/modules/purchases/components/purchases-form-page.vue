<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/purchases' }">
        <app-i18n code="entities.purchases.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.purchases.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.purchases.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.purchases.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.purchases.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-purchases-form
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
import PurchasesForm from '@/modules/purchases/components/purchases-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-purchases-form-page',

  props: ['id'],

  components: {
    [PurchasesForm.name]: PurchasesForm,
  },

  computed: {
    ...mapGetters({
      record: 'purchases/form/record',
      findLoading: 'purchases/form/findLoading',
      saveLoading: 'purchases/form/saveLoading',
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
      doFind: 'purchases/form/doFind',
      doNew: 'purchases/form/doNew',
      doUpdate: 'purchases/form/doUpdate',
      doCreate: 'purchases/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/purchases');
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
