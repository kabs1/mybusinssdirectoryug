<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/currency' }">
        <app-i18n code="entities.currency.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.currency.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.currency.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-currency-view-toolbar v-if="record"></app-currency-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.currencyTitle.label" :value="presenter(record, 'currencyTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.currencyCode.label" :value="presenter(record, 'currencyCode')"></app-view-item-text>

        <app-view-item-text :label="fields.currencySign.label" :value="presenter(record, 'currencySign')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CurrencyViewToolbar from '@/modules/currency/components/currency-view-toolbar.vue';
import { CurrencyModel } from '@/modules/currency/currency-model';

const { fields } = CurrencyModel;

export default {
  name: 'app-currency-view-page',

  props: ['id'],

  components: {
    [CurrencyViewToolbar.name]: CurrencyViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'currency/view/record',
      loading: 'currency/view/loading',
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
      doFind: 'currency/view/doFind',
    }),

    presenter(record, fieldName) {
      return CurrencyModel.presenter(record, fieldName);
    },
  },
};
</script>
