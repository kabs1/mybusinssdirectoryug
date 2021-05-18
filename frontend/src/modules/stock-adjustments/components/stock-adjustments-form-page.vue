<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stock-adjustments' }">
        <app-i18n code="entities.stockAdjustments.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockAdjustments.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stockAdjustments.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockAdjustments.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stockAdjustments.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-stock-adjustments-form
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
import StockAdjustmentsForm from '@/modules/stock-adjustments/components/stock-adjustments-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-stock-adjustments-form-page',

  props: ['id'],

  components: {
    [StockAdjustmentsForm.name]: StockAdjustmentsForm,
  },

  computed: {
    ...mapGetters({
      record: 'stockAdjustments/form/record',
      findLoading: 'stockAdjustments/form/findLoading',
      saveLoading: 'stockAdjustments/form/saveLoading',
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
      doFind: 'stockAdjustments/form/doFind',
      doNew: 'stockAdjustments/form/doNew',
      doUpdate: 'stockAdjustments/form/doUpdate',
      doCreate: 'stockAdjustments/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/stock-adjustments');
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
