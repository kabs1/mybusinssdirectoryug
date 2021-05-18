<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    :inline="true"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      
        <el-form-item :prop="fields.expensesTitle.name">
          <el-input :placeholder="fields.expensesTitle.label" v-model="model[fields.expensesTitle.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.expensesStatus.name">
          <el-select :placeholder="fields.expensesStatus.label" v-model="model[fields.expensesStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.expensesStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>

      <el-form-item :label="fields.expensesMadeBy.label" :prop="fields.expensesMadeBy.name">
        <app-autocomplete-one-input
                :fetchFn="fields.expensesMadeBy.fetchFn"
                v-model="model[fields.expensesMadeBy.name]"
        ></app-autocomplete-one-input>
      </el-form-item>

      <el-form-item :label="fields.expensesDateRange.label" :prop="fields.expensesDateRange.name">
        <el-date-picker type="daterange" v-model="model[fields.expensesDateRange.name]"></el-date-picker>
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
import { ExpensesModel } from '@/modules/expenses/expenses-model';

const { fields } = ExpensesModel;

const filterSchema = new FilterSchema([
  fields.expensesTitle,
  fields.expensesMadeBy,
  fields.expensesDateRange,
  fields.expensesStatus,
]);

export default {
  name: 'app-expenses-list-filter',

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
      loading: 'expenses/list/loading',
      filter: 'expenses/list/filter',
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
      doReset: 'expenses/list/doReset',
      doFetch: 'expenses/list/doFetch',
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
