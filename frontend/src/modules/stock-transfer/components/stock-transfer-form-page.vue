<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stock-transfer' }">
        <app-i18n code="entities.stockTransfer.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stockTransfer.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stockTransfer.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stockTransfer.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stockTransfer.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-stock-transfer-form
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
import StockTransferForm from '@/modules/stock-transfer/components/stock-transfer-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-stock-transfer-form-page',

  props: ['id'],

  components: {
    [StockTransferForm.name]: StockTransferForm,
  },

  computed: {
    ...mapGetters({
      record: 'stockTransfer/form/record',
      findLoading: 'stockTransfer/form/findLoading',
      saveLoading: 'stockTransfer/form/saveLoading',
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
      doFind: 'stockTransfer/form/doFind',
      doNew: 'stockTransfer/form/doNew',
      doUpdate: 'stockTransfer/form/doUpdate',
      doCreate: 'stockTransfer/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/stock-transfer');
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
