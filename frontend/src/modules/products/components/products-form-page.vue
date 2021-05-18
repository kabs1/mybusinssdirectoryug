<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/products' }">
        <app-i18n code="entities.products.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.products.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.products.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.products.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.products.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-products-form
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
import ProductsForm from '@/modules/products/components/products-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-products-form-page',

  props: ['id'],

  components: {
    [ProductsForm.name]: ProductsForm,
  },

  computed: {
    ...mapGetters({
      record: 'products/form/record',
      findLoading: 'products/form/findLoading',
      saveLoading: 'products/form/saveLoading',
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
      doFind: 'products/form/doFind',
      doNew: 'products/form/doNew',
      doUpdate: 'products/form/doUpdate',
      doCreate: 'products/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/products');
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
