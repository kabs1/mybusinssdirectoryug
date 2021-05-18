<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/brands' }">
        <app-i18n code="entities.brands.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.brands.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.brands.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.brands.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.brands.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-brands-form
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
import BrandsForm from '@/modules/brands/components/brands-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-brands-form-page',

  props: ['id'],

  components: {
    [BrandsForm.name]: BrandsForm,
  },

  computed: {
    ...mapGetters({
      record: 'brands/form/record',
      findLoading: 'brands/form/findLoading',
      saveLoading: 'brands/form/saveLoading',
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
      doFind: 'brands/form/doFind',
      doNew: 'brands/form/doNew',
      doUpdate: 'brands/form/doUpdate',
      doCreate: 'brands/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/brands');
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
