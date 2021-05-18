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
        <app-i18n code="entities.documentTypes.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.documentTypes.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-document-types-view-toolbar v-if="record"></app-document-types-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.documentTypeTitle.label" :value="presenter(record, 'documentTypeTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.documentTypeNote.label" :value="presenter(record, 'documentTypeNote')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DocumentTypesViewToolbar from '@/modules/document-types/components/document-types-view-toolbar.vue';
import { DocumentTypesModel } from '@/modules/document-types/document-types-model';

const { fields } = DocumentTypesModel;

export default {
  name: 'app-document-types-view-page',

  props: ['id'],

  components: {
    [DocumentTypesViewToolbar.name]: DocumentTypesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'documentTypes/view/record',
      loading: 'documentTypes/view/loading',
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
      doFind: 'documentTypes/view/doFind',
    }),

    presenter(record, fieldName) {
      return DocumentTypesModel.presenter(record, fieldName);
    },
  },
};
</script>
