<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/documents' }">
        <app-i18n code="entities.documents.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.documents.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.documents.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documents.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.documents.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-documents-form
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
import DocumentsForm from '@/modules/documents/components/documents-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-documents-form-page',

  props: ['id'],

  components: {
    [DocumentsForm.name]: DocumentsForm,
  },

  computed: {
    ...mapGetters({
      record: 'documents/form/record',
      findLoading: 'documents/form/findLoading',
      saveLoading: 'documents/form/saveLoading',
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
      doFind: 'documents/form/doFind',
      doNew: 'documents/form/doNew',
      doUpdate: 'documents/form/doUpdate',
      doCreate: 'documents/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/documents');
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
