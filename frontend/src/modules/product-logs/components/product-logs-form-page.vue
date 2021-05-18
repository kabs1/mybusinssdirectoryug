<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/product-logs' }">
        <app-i18n code="entities.productLogs.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productLogs.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productLogs.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productLogs.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productLogs.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-product-logs-form
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
import ProductLogsForm from '@/modules/product-logs/components/product-logs-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-product-logs-form-page',

  props: ['id'],

  components: {
    [ProductLogsForm.name]: ProductLogsForm,
  },

  computed: {
    ...mapGetters({
      record: 'productLogs/form/record',
      findLoading: 'productLogs/form/findLoading',
      saveLoading: 'productLogs/form/saveLoading',
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
      doFind: 'productLogs/form/doFind',
      doNew: 'productLogs/form/doNew',
      doUpdate: 'productLogs/form/doUpdate',
      doCreate: 'productLogs/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/product-logs');
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
