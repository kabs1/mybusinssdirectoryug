<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/assets' }">
        <app-i18n code="entities.assets.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.assets.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.assets.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-assets-view-toolbar v-if="record"></app-assets-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.assetImage.label" :value="presenter(record, 'assetImage')"></app-view-item-image>

        <app-view-item-text :label="fields.assetName.label" :value="presenter(record, 'assetName')"></app-view-item-text>

        <app-view-item-text :label="fields.assetDetails.label" :value="presenter(record, 'assetDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.assetValue.label" :value="presenter(record, 'assetValue')"></app-view-item-text>

        <app-view-item-file :label="fields.assetDocs.label" :value="presenter(record, 'assetDocs')"></app-view-item-file>

        <app-view-item-relation-to-many
          :label="fields.assetsStall.label"
          :permission="fields.assetsStall.readPermission"
          :url="fields.assetsStall.viewUrl"
          :value="presenter(record, 'assetsStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.assetPurchaseDate.label" :value="presenter(record, 'assetPurchaseDate')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AssetsViewToolbar from '@/modules/assets/components/assets-view-toolbar.vue';
import { AssetsModel } from '@/modules/assets/assets-model';

const { fields } = AssetsModel;

export default {
  name: 'app-assets-view-page',

  props: ['id'],

  components: {
    [AssetsViewToolbar.name]: AssetsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'assets/view/record',
      loading: 'assets/view/loading',
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
      doFind: 'assets/view/doFind',
    }),

    presenter(record, fieldName) {
      return AssetsModel.presenter(record, fieldName);
    },
  },
};
</script>
