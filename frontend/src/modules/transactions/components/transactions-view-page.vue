<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/transactions' }">
        <app-i18n code="entities.transactions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.transactions.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.transactions.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-transactions-view-toolbar v-if="record"></app-transactions-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.transactionRef.label" :value="presenter(record, 'transactionRef')"></app-view-item-text>

        <app-view-item-text :label="fields.transactionClass.label" :value="presenter(record, 'transactionClass')"></app-view-item-text>

        <app-view-item-text :label="fields.transactionType.label" :value="presenter(record, 'transactionType')"></app-view-item-text>

        <app-view-item-text :label="fields.transactionValue.label" :value="presenter(record, 'transactionValue')"></app-view-item-text>

        <app-view-item-text :label="fields.transactionIdentifier.label" :value="presenter(record, 'transactionIdentifier')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.transactionSession.label"
          :permission="fields.transactionSession.readPermission"
          :url="fields.transactionSession.viewUrl"
          :value="presenter(record, 'transactionSession')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TransactionsViewToolbar from '@/modules/transactions/components/transactions-view-toolbar.vue';
import { TransactionsModel } from '@/modules/transactions/transactions-model';

const { fields } = TransactionsModel;

export default {
  name: 'app-transactions-view-page',

  props: ['id'],

  components: {
    [TransactionsViewToolbar.name]: TransactionsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'transactions/view/record',
      loading: 'transactions/view/loading',
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
      doFind: 'transactions/view/doFind',
    }),

    presenter(record, fieldName) {
      return TransactionsModel.presenter(record, fieldName);
    },
  },
};
</script>
