<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/categories' }">
        <app-i18n code="entities.categories.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.categories.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.categories.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.categories.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.categories.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-categories-form
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
import CategoriesForm from '@/modules/categories/components/categories-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-categories-form-page',

  props: ['id'],

  components: {
    [CategoriesForm.name]: CategoriesForm,
  },

  computed: {
    ...mapGetters({
      record: 'categories/form/record',
      findLoading: 'categories/form/findLoading',
      saveLoading: 'categories/form/saveLoading',
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
      doFind: 'categories/form/doFind',
      doNew: 'categories/form/doNew',
      doUpdate: 'categories/form/doUpdate',
      doCreate: 'categories/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/categories');
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
