<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/returns' }">
        <app-i18n code="entities.returns.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.returns.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.returns.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-returns-view-toolbar v-if="record"></app-returns-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.returnRefNo.label" :value="presenter(record, 'returnRefNo')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.returnProduct.label"
          :permission="fields.returnProduct.readPermission"
          :url="fields.returnProduct.viewUrl"
          :value="presenter(record, 'returnProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.returnUnits.label" :value="presenter(record, 'returnUnits')"></app-view-item-text>

        <app-view-item-text :label="fields.returnReason.label" :value="presenter(record, 'returnReason')"></app-view-item-text>

        <app-view-item-text :label="fields.returnsFrom.label" :value="presenter(record, 'returnsFrom')"></app-view-item-text>

        <app-view-item-text :label="fields.returnIdentifier.label" :value="presenter(record, 'returnIdentifier')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.returnStall.label"
          :permission="fields.returnStall.readPermission"
          :url="fields.returnStall.viewUrl"
          :value="presenter(record, 'returnStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ReturnsViewToolbar from '@/modules/returns/components/returns-view-toolbar.vue';
import { ReturnsModel } from '@/modules/returns/returns-model';

const { fields } = ReturnsModel;

export default {
  name: 'app-returns-view-page',

  props: ['id'],

  components: {
    [ReturnsViewToolbar.name]: ReturnsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'returns/view/record',
      loading: 'returns/view/loading',
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
      doFind: 'returns/view/doFind',
    }),

    presenter(record, fieldName) {
      return ReturnsModel.presenter(record, fieldName);
    },
  },
};
</script>
