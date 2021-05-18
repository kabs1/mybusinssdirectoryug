<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :inline="true"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      
        <el-form-item :prop="fields.transactionRef.name">
          <el-input :placeholder="fields.transactionRef.label" v-model="model[fields.transactionRef.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.transactionClass.name">
          <el-select :placeholder="fields.transactionClass.label" v-model="model[fields.transactionClass.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.transactionClass.options"
            ></el-option>
          </el-select>
        </el-form-item>
      
        <el-form-item :prop="fields.transactionType.name">
          <el-select :placeholder="fields.transactionType.label" v-model="model[fields.transactionType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.transactionType.options"
            ></el-option>
          </el-select>
        </el-form-item>
      
        <el-form-item :prop="fields.transactionIdentifier.name">
          <el-input :placeholder="fields.transactionIdentifier.label" v-model="model[fields.transactionIdentifier.name]"/>
        </el-form-item>
     
    </el-row>

    <div class="filter-buttons">
      <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary" round>
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo" round>
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { TransactionsModel } from '@/modules/transactions/transactions-model';

const { fields } = TransactionsModel;

const filterSchema = new FilterSchema([
  fields.transactionRef,
  fields.transactionClass,
  fields.transactionType,
  fields.transactionIdentifier,
]);

export default {
  name: 'app-transactions-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'transactions/list/loading',
      filter: 'transactions/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'transactions/list/doReset',
      doFetch: 'transactions/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
};
</script>

<style>
</style>
