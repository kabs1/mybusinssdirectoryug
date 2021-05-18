<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/product-count' }">
        <app-i18n code="entities.productCount.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.productCount.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productCount.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.productCount.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.productCount.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-product-count-form
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
import ProductCountForm from '@/modules/product-count/components/product-count-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-product-count-form-page',

  props: ['id'],

  components: {
    [ProductCountForm.name]: ProductCountForm,
  },

  computed: {
    ...mapGetters({
      record: 'productCount/form/record',
      findLoading: 'productCount/form/findLoading',
      saveLoading: 'productCount/form/saveLoading',
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
      doFind: 'productCount/form/doFind',
      doNew: 'productCount/form/doNew',
      doUpdate: 'productCount/form/doUpdate',
      doCreate: 'productCount/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/product-count');
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
