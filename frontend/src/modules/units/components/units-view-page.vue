<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/units' }">
        <app-i18n code="entities.units.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.units.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.units.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-units-view-toolbar v-if="record"></app-units-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.unitsTitle.label" :value="presenter(record, 'unitsTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.unitsCode.label" :value="presenter(record, 'unitsCode')"></app-view-item-text>

        <app-view-item-text :label="fields.unitsType.label" :value="presenter(record, 'unitsType')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UnitsViewToolbar from '@/modules/units/components/units-view-toolbar.vue';
import { UnitsModel } from '@/modules/units/units-model';

const { fields } = UnitsModel;

export default {
  name: 'app-units-view-page',

  props: ['id'],

  components: {
    [UnitsViewToolbar.name]: UnitsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'units/view/record',
      loading: 'units/view/loading',
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
      doFind: 'units/view/doFind',
    }),

    presenter(record, fieldName) {
      return UnitsModel.presenter(record, fieldName);
    },
  },
};
</script>
