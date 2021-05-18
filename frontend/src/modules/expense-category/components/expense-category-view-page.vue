<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/expense-category' }">
        <app-i18n code="entities.expenseCategory.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenseCategory.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenseCategory.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-expense-category-view-toolbar v-if="record"></app-expense-category-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.expCategoryTitle.label" :value="presenter(record, 'expCategoryTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.expCategoryDetails.label" :value="presenter(record, 'expCategoryDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpenseCategoryViewToolbar from '@/modules/expense-category/components/expense-category-view-toolbar.vue';
import { ExpenseCategoryModel } from '@/modules/expense-category/expense-category-model';

const { fields } = ExpenseCategoryModel;

export default {
  name: 'app-expense-category-view-page',

  props: ['id'],

  components: {
    [ExpenseCategoryViewToolbar.name]: ExpenseCategoryViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'expenseCategory/view/record',
      loading: 'expenseCategory/view/loading',
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
      doFind: 'expenseCategory/view/doFind',
    }),

    presenter(record, fieldName) {
      return ExpenseCategoryModel.presenter(record, fieldName);
    },
  },
};
</script>
