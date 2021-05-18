<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tax-class' }">
        <app-i18n code="entities.taxClass.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.taxClass.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.taxClass.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-tax-class-view-toolbar v-if="record"></app-tax-class-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.taxClassName.label" :value="presenter(record, 'taxClassName')"></app-view-item-text>

        <app-view-item-text :label="fields.taxClassPercentage.label" :value="presenter(record, 'taxClassPercentage')"></app-view-item-text>

        <app-view-item-text :label="fields.taxClassDetails.label" :value="presenter(record, 'taxClassDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaxClassViewToolbar from '@/modules/tax-class/components/tax-class-view-toolbar.vue';
import { TaxClassModel } from '@/modules/tax-class/tax-class-model';

const { fields } = TaxClassModel;

export default {
  name: 'app-tax-class-view-page',

  props: ['id'],

  components: {
    [TaxClassViewToolbar.name]: TaxClassViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'taxClass/view/record',
      loading: 'taxClass/view/loading',
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
      doFind: 'taxClass/view/doFind',
    }),

    presenter(record, fieldName) {
      return TaxClassModel.presenter(record, fieldName);
    },
  },
};
</script>
