<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stall' }">
        <app-i18n code="entities.stall.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stall.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stall.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-stall-view-toolbar v-if="record"></app-stall-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.stallCover.label" :value="presenter(record, 'stallCover')"></app-view-item-image>

        <app-view-item-text :label="fields.stallName.label" :value="presenter(record, 'stallName')"></app-view-item-text>

        <app-view-item-text :label="fields.stallType.label" :value="presenter(record, 'stallType')"></app-view-item-text>

        <app-view-item-text :label="fields.stallInfo.label" :value="presenter(record, 'stallInfo')"></app-view-item-text>

        <app-view-item-text :label="fields.stallLocation.label" :value="presenter(record, 'stallLocation')"></app-view-item-text>

        <app-view-item-text :label="fields.stallPhoneNumber.label" :value="presenter(record, 'stallPhoneNumber')"></app-view-item-text>

        <app-view-item-text :label="fields.stallEmail.label" :value="presenter(record, 'stallEmail')"></app-view-item-text>

        <app-view-item-text :label="fields.stallIsStatus.label" :value="presenter(record, 'stallIsStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.stallPos.label" :value="presenter(record, 'stallPos')"></app-view-item-text>

        <app-view-item-text :label="fields.stallLoyaltyPointValue.label" :value="presenter(record, 'stallLoyaltyPointValue')"></app-view-item-text>

        <app-view-item-text :label="fields.stallCustom1.label" :value="presenter(record, 'stallCustom1')"></app-view-item-text>

        <app-view-item-text :label="fields.stallCustom2.label" :value="presenter(record, 'stallCustom2')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StallViewToolbar from '@/modules/stall/components/stall-view-toolbar.vue';
import { StallModel } from '@/modules/stall/stall-model';

const { fields } = StallModel;

export default {
  name: 'app-stall-view-page',

  props: ['id'],

  components: {
    [StallViewToolbar.name]: StallViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'stall/view/record',
      loading: 'stall/view/loading',
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
      doFind: 'stall/view/doFind',
    }),

    presenter(record, fieldName) {
      return StallModel.presenter(record, fieldName);
    },
  },
};
</script>
