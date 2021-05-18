<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/commissions' }">
        <app-i18n code="entities.commissions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.commissions.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.commissions.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-commissions-view-toolbar v-if="record"></app-commissions-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.commStaff.label"
          :permission="fields.commStaff.readPermission"
          :url="fields.commStaff.viewUrl"
          :value="presenter(record, 'commStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.commSale.label"
          :permission="fields.commSale.readPermission"
          :url="fields.commSale.viewUrl"
          :value="presenter(record, 'commSale')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.commStall.label"
          :permission="fields.commStall.readPermission"
          :url="fields.commStall.viewUrl"
          :value="presenter(record, 'commStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.commRegister.label"
          :permission="fields.commRegister.readPermission"
          :url="fields.commRegister.viewUrl"
          :value="presenter(record, 'commRegister')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.commAmount.label" :value="presenter(record, 'commAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommissionsViewToolbar from '@/modules/commissions/components/commissions-view-toolbar.vue';
import { CommissionsModel } from '@/modules/commissions/commissions-model';

const { fields } = CommissionsModel;

export default {
  name: 'app-commissions-view-page',

  props: ['id'],

  components: {
    [CommissionsViewToolbar.name]: CommissionsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'commissions/view/record',
      loading: 'commissions/view/loading',
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
      doFind: 'commissions/view/doFind',
    }),

    presenter(record, fieldName) {
      return CommissionsModel.presenter(record, fieldName);
    },
  },
};
</script>
