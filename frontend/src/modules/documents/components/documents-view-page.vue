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
        <app-i18n code="entities.documents.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documents.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-documents-view-toolbar v-if="record"></app-documents-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.documentTitle.label" :value="presenter(record, 'documentTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.documentDetails.label" :value="presenter(record, 'documentDetails')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.documentType.label"
          :permission="fields.documentType.readPermission"
          :url="fields.documentType.viewUrl"
          :value="presenter(record, 'documentType')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-many
          :label="fields.docStall.label"
          :permission="fields.docStall.readPermission"
          :url="fields.docStall.viewUrl"
          :value="presenter(record, 'docStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-file :label="fields.documentFile.label" :value="presenter(record, 'documentFile')"></app-view-item-file>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DocumentsViewToolbar from '@/modules/documents/components/documents-view-toolbar.vue';
import { DocumentsModel } from '@/modules/documents/documents-model';

const { fields } = DocumentsModel;

export default {
  name: 'app-documents-view-page',

  props: ['id'],

  components: {
    [DocumentsViewToolbar.name]: DocumentsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'documents/view/record',
      loading: 'documents/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'documents/view/doFind',
    }),

    presenter(record, fieldName) {
      return DocumentsModel.presenter(record, fieldName);
    },
  },
};
</script>
