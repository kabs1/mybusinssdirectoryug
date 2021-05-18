<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/expenses' }">
        <app-i18n code="entities.expenses.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.expenses.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.expenses.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-expenses-view-toolbar v-if="record"></app-expenses-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.expenseCover.label" :value="presenter(record, 'expenseCover')"></app-view-item-image>

        <app-view-item-text :label="fields.expensesTitle.label" :value="presenter(record, 'expensesTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.expensesCost.label" :value="presenter(record, 'expensesCost')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.expenseMadeTo.label"
          :permission="fields.expenseMadeTo.readPermission"
          :url="fields.expenseMadeTo.viewUrl"
          :value="presenter(record, 'expenseMadeTo')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-one
          :label="fields.expensesMadeBy.label"
          :permission="fields.expensesMadeBy.readPermission"
          :url="fields.expensesMadeBy.viewUrl"
          :value="presenter(record, 'expensesMadeBy')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.expensesDate.label" :value="presenter(record, 'expensesDate')"></app-view-item-text>

        <app-view-item-text :label="fields.expensesStatus.label" :value="presenter(record, 'expensesStatus')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.expenseStall.label"
          :permission="fields.expenseStall.readPermission"
          :url="fields.expenseStall.viewUrl"
          :value="presenter(record, 'expenseStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.expenseNote.label" :value="presenter(record, 'expenseNote')"></app-view-item-text>

        <app-view-item-file :label="fields.expenseDocs.label" :value="presenter(record, 'expenseDocs')"></app-view-item-file>

        <app-view-item-file :label="fields.expenseDoc.label" :value="presenter(record, 'expenseDoc')"></app-view-item-file>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpensesViewToolbar from '@/modules/expenses/components/expenses-view-toolbar.vue';
import { ExpensesModel } from '@/modules/expenses/expenses-model';

const { fields } = ExpensesModel;

export default {
  name: 'app-expenses-view-page',

  props: ['id'],

  components: {
    [ExpensesViewToolbar.name]: ExpensesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'expenses/view/record',
      loading: 'expenses/view/loading',
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
      doFind: 'expenses/view/doFind',
    }),

    presenter(record, fieldName) {
      return ExpensesModel.presenter(record, fieldName);
    },
  },
};
</script>
