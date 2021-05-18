<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/register' }">
        <app-i18n code="entities.register.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.register.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.register.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-register-view-toolbar v-if="record"></app-register-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.registerRef.label" :value="presenter(record, 'registerRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.registerStall.label"
          :permission="fields.registerStall.readPermission"
          :url="fields.registerStall.viewUrl"
          :value="presenter(record, 'registerStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.registerStaff.label"
          :permission="fields.registerStaff.readPermission"
          :url="fields.registerStaff.viewUrl"
          :value="presenter(record, 'registerStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.registerOpeningValue.label" :value="presenter(record, 'registerOpeningValue')"></app-view-item-text>

        <app-view-item-text :label="fields.registerClosingValue.label" :value="presenter(record, 'registerClosingValue')"></app-view-item-text>

        <app-view-item-text :label="fields.registerSaleValue.label" :value="presenter(record, 'registerSaleValue')"></app-view-item-text>

        <app-view-item-text :label="fields.registerSaleItems.label" :value="presenter(record, 'registerSaleItems')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.registerSaleRef.label"
          :permission="fields.registerSaleRef.readPermission"
          :url="fields.registerSaleRef.viewUrl"
          :value="presenter(record, 'registerSaleRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.registerReturnsRef.label"
          :permission="fields.registerReturnsRef.readPermission"
          :url="fields.registerReturnsRef.viewUrl"
          :value="presenter(record, 'registerReturnsRef')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.registerOpenTime.label" :value="presenter(record, 'registerOpenTime')"></app-view-item-text>

        <app-view-item-text :label="fields.registerCloseTime.label" :value="presenter(record, 'registerCloseTime')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RegisterViewToolbar from '@/modules/register/components/register-view-toolbar.vue';
import { RegisterModel } from '@/modules/register/register-model';

const { fields } = RegisterModel;

export default {
  name: 'app-register-view-page',

  props: ['id'],

  components: {
    [RegisterViewToolbar.name]: RegisterViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'register/view/record',
      loading: 'register/view/loading',
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
      doFind: 'register/view/doFind',
    }),

    presenter(record, fieldName) {
      return RegisterModel.presenter(record, fieldName);
    },
  },
};
</script>
