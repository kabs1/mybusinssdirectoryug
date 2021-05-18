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
        <app-i18n code="entities.categories.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.categories.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-categories-view-toolbar v-if="record"></app-categories-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.categoryCover.label" :value="presenter(record, 'categoryCover')"></app-view-item-image>

        <app-view-item-text :label="fields.categoryTitle.label" :value="presenter(record, 'categoryTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.categoryShortCode.label" :value="presenter(record, 'categoryShortCode')"></app-view-item-text>

        <app-view-item-text :label="fields.categoryDetails.label" :value="presenter(record, 'categoryDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CategoriesViewToolbar from '@/modules/categories/components/categories-view-toolbar.vue';
import { CategoriesModel } from '@/modules/categories/categories-model';

const { fields } = CategoriesModel;

export default {
  name: 'app-categories-view-page',

  props: ['id'],

  components: {
    [CategoriesViewToolbar.name]: CategoriesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'categories/view/record',
      loading: 'categories/view/loading',
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
      doFind: 'categories/view/doFind',
    }),

    presenter(record, fieldName) {
      return CategoriesModel.presenter(record, fieldName);
    },
  },
};
</script>
