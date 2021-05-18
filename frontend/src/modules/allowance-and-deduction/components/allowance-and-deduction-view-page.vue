<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/allowance-and-deduction' }">
        <app-i18n code="entities.allowanceAndDeduction.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.allowanceAndDeduction.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.allowanceAndDeduction.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-allowance-and-deduction-view-toolbar v-if="record"></app-allowance-and-deduction-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.adRef.label" :value="presenter(record, 'adRef')"></app-view-item-text>

        <app-view-item-text :label="fields.adType.label" :value="presenter(record, 'adType')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.adStaff.label"
          :permission="fields.adStaff.readPermission"
          :url="fields.adStaff.viewUrl"
          :value="presenter(record, 'adStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.adAmmount.label" :value="presenter(record, 'adAmmount')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.adStall.label"
          :permission="fields.adStall.readPermission"
          :url="fields.adStall.viewUrl"
          :value="presenter(record, 'adStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.adDate.label" :value="presenter(record, 'adDate')"></app-view-item-text>

        <app-view-item-text :label="fields.adNote.label" :value="presenter(record, 'adNote')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.adDamages.label"
          :permission="fields.adDamages.readPermission"
          :url="fields.adDamages.viewUrl"
          :value="presenter(record, 'adDamages')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.adCommissions.label"
          :permission="fields.adCommissions.readPermission"
          :url="fields.adCommissions.viewUrl"
          :value="presenter(record, 'adCommissions')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.adExpenses.label"
          :permission="fields.adExpenses.readPermission"
          :url="fields.adExpenses.viewUrl"
          :value="presenter(record, 'adExpenses')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AllowanceAndDeductionViewToolbar from '@/modules/allowance-and-deduction/components/allowance-and-deduction-view-toolbar.vue';
import { AllowanceAndDeductionModel } from '@/modules/allowance-and-deduction/allowance-and-deduction-model';

const { fields } = AllowanceAndDeductionModel;

export default {
  name: 'app-allowance-and-deduction-view-page',

  props: ['id'],

  components: {
    [AllowanceAndDeductionViewToolbar.name]: AllowanceAndDeductionViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'allowanceAndDeduction/view/record',
      loading: 'allowanceAndDeduction/view/loading',
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
      doFind: 'allowanceAndDeduction/view/doFind',
    }),

    presenter(record, fieldName) {
      return AllowanceAndDeductionModel.presenter(record, fieldName);
    },
  },
};
</script>
