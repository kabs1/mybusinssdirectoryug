<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/suppliers' }">
        <app-i18n code="entities.suppliers.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.suppliers.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.suppliers.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-suppliers-view-toolbar v-if="record"></app-suppliers-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >

        <div style="margin-left: 50px">

        <app-view-item-image :label="fields.supplierProfile.label" :value="presenter(record, 'supplierProfile')"></app-view-item-image>

        <app-view-item-text :label="fields.supplierNames.label" :value="presenter(record, 'supplierNames')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierBusinessName.label" :value="presenter(record, 'supplierBusinessName')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierEmail.label" :value="presenter(record, 'supplierEmail')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierLocation.label" :value="presenter(record, 'supplierLocation')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierPhoneNumber.label" :value="presenter(record, 'supplierPhoneNumber')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierPayTerm.label" :value="presenter(record, 'supplierPayTerm')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierPayType.label" :value="presenter(record, 'supplierPayType')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierStatus.label" :value="presenter(record, 'supplierStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.supplierCreditBalance.label" :value="presenter(record, 'supplierCreditBalance')"></app-view-item-text>

        <app-view-item-file :label="fields.supplierDocs.label" :value="presenter(record, 'supplierDocs')"></app-view-item-file>

        <app-view-item-relation-to-one
          :label="fields.userId.label"
          :permission="fields.userId.readPermission"
          :url="fields.userId.viewUrl"
          :value="presenter(record, 'userId')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>


        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SuppliersViewToolbar from '@/modules/suppliers/components/suppliers-view-toolbar.vue';
import { SuppliersModel } from '@/modules/suppliers/suppliers-model';

const { fields } = SuppliersModel;

export default {
  name: 'app-suppliers-view-page',

  props: ['id'],

  components: {
    [SuppliersViewToolbar.name]: SuppliersViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'suppliers/view/record',
      loading: 'suppliers/view/loading',
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
      doFind: 'suppliers/view/doFind',
    }),

    presenter(record, fieldName) {
      return SuppliersModel.presenter(record, fieldName);
    },
  },
};
</script>
