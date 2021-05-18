<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/product-value' }">
        <app-i18n code="entities.productValue.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productValue.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productValue.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productValue.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productValue.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-product-value-form
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
import ProductValueForm from '@/modules/product-value/components/product-value-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-product-value-form-page',

  props: ['id'],

  components: {
    [ProductValueForm.name]: ProductValueForm,
  },

  computed: {
    ...mapGetters({
      record: 'productValue/form/record',
      findLoading: 'productValue/form/findLoading',
      saveLoading: 'productValue/form/saveLoading',
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
      doFind: 'productValue/form/doFind',
      doNew: 'productValue/form/doNew',
      doUpdate: 'productValue/form/doUpdate',
      doCreate: 'productValue/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/product-value');
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
