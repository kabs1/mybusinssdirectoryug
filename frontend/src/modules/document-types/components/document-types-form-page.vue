<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/document-types' }">
        <app-i18n code="entities.documentTypes.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.documentTypes.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.documentTypes.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documentTypes.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.documentTypes.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-document-types-form
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
import DocumentTypesForm from '@/modules/document-types/components/document-types-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-document-types-form-page',

  props: ['id'],

  components: {
    [DocumentTypesForm.name]: DocumentTypesForm,
  },

  computed: {
    ...mapGetters({
      record: 'documentTypes/form/record',
      findLoading: 'documentTypes/form/findLoading',
      saveLoading: 'documentTypes/form/saveLoading',
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
      doFind: 'documentTypes/form/doFind',
      doNew: 'documentTypes/form/doNew',
      doUpdate: 'documentTypes/form/doUpdate',
      doCreate: 'documentTypes/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/document-types');
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
