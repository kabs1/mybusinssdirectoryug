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
        <app-i18n code="entities.brands.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.brands.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-brands-view-toolbar v-if="record"></app-brands-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.brandCover.label" :value="presenter(record, 'brandCover')"></app-view-item-image>

        <app-view-item-text :label="fields.brandTitle.label" :value="presenter(record, 'brandTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.brandDetails.label" :value="presenter(record, 'brandDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BrandsViewToolbar from '@/modules/brands/components/brands-view-toolbar.vue';
import { BrandsModel } from '@/modules/brands/brands-model';

const { fields } = BrandsModel;

export default {
  name: 'app-brands-view-page',

  props: ['id'],

  components: {
    [BrandsViewToolbar.name]: BrandsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'brands/view/record',
      loading: 'brands/view/loading',
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
      doFind: 'brands/view/doFind',
    }),

    presenter(record, fieldName) {
      return BrandsModel.presenter(record, fieldName);
    },
  },
};
</script>
