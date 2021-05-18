<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/payroll' }">
        <app-i18n code="entities.payroll.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.payroll.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.payroll.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-payroll-view-toolbar v-if="record"></app-payroll-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.payrollRef.label" :value="presenter(record, 'payrollRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.payrollStaff.label"
          :permission="fields.payrollStaff.readPermission"
          :url="fields.payrollStaff.viewUrl"
          :value="presenter(record, 'payrollStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.payrollSalary.label" :value="presenter(record, 'payrollSalary')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.payrollAd.label"
          :permission="fields.payrollAd.readPermission"
          :url="fields.payrollAd.viewUrl"
          :value="presenter(record, 'payrollAd')"
        ></app-view-item-relation-to-many>

        <app-view-item-file :label="fields.payrollDocs.label" :value="presenter(record, 'payrollDocs')"></app-view-item-file>

        <app-view-item-text :label="fields.payrollWorkingType.label" :value="presenter(record, 'payrollWorkingType')"></app-view-item-text>

        <app-view-item-text :label="fields.payrollWorkingTime.label" :value="presenter(record, 'payrollWorkingTime')"></app-view-item-text>

        <app-view-item-text :label="fields.payrollStatus.label" :value="presenter(record, 'payrollStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.payrollDate.label" :value="presenter(record, 'payrollDate')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PayrollViewToolbar from '@/modules/payroll/components/payroll-view-toolbar.vue';
import { PayrollModel } from '@/modules/payroll/payroll-model';

const { fields } = PayrollModel;

export default {
  name: 'app-payroll-view-page',

  props: ['id'],

  components: {
    [PayrollViewToolbar.name]: PayrollViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'payroll/view/record',
      loading: 'payroll/view/loading',
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
      doFind: 'payroll/view/doFind',
    }),

    presenter(record, fieldName) {
      return PayrollModel.presenter(record, fieldName);
    },
  },
};
</script>
