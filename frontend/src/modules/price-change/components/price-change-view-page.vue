<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/price-change' }">
        <app-i18n code="entities.priceChange.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.priceChange.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.priceChange.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-price-change-view-toolbar v-if="record"></app-price-change-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.priceChangeRef.label" :value="presenter(record, 'priceChangeRef')"></app-view-item-text>

        <app-view-item-text :label="fields.priceChangeType.label" :value="presenter(record, 'priceChangeType')"></app-view-item-text>

        <app-view-item-text :label="fields.priceChangeBefore.label" :value="presenter(record, 'priceChangeBefore')"></app-view-item-text>

        <app-view-item-text :label="fields.priceChangeAfter.label" :value="presenter(record, 'priceChangeAfter')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.priceChangeProduct.label"
          :permission="fields.priceChangeProduct.readPermission"
          :url="fields.priceChangeProduct.viewUrl"
          :value="presenter(record, 'priceChangeProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.priceChangeStall.label"
          :permission="fields.priceChangeStall.readPermission"
          :url="fields.priceChangeStall.viewUrl"
          :value="presenter(record, 'priceChangeStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.priceChangeSession.label"
          :permission="fields.priceChangeSession.readPermission"
          :url="fields.priceChangeSession.viewUrl"
          :value="presenter(record, 'priceChangeSession')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.priceChangeStatus.label" :value="presenter(record, 'priceChangeStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PriceChangeViewToolbar from '@/modules/price-change/components/price-change-view-toolbar.vue';
import { PriceChangeModel } from '@/modules/price-change/price-change-model';

const { fields } = PriceChangeModel;

export default {
  name: 'app-price-change-view-page',

  props: ['id'],

  components: {
    [PriceChangeViewToolbar.name]: PriceChangeViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'priceChange/view/record',
      loading: 'priceChange/view/loading',
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
      doFind: 'priceChange/view/doFind',
    }),

    presenter(record, fieldName) {
      return PriceChangeModel.presenter(record, fieldName);
    },
  },
};
</script>
