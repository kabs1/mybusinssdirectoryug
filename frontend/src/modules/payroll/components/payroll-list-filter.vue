<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="left"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    :inline="true"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>

        <el-form-item :prop="fields.payrollRef.name">
          <el-input :placeholder="fields.payrollRef.label" v-model="model[fields.payrollRef.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.payrollStatus.name">
          <el-select :placeholder="fields.payrollStatus.label" v-model="model[fields.payrollStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
                    :key="option.id"
                    :label="option.label"
                    :value="option.id"
                    v-for="option in fields.payrollStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :prop="fields.payrollWorkingType.name">
            <el-select :placeholder="fields.payrollWorkingType.label" v-model="model[fields.payrollWorkingType.name]">
                <el-option :value="undefined">--</el-option>
                <el-option
                        :key="option.id"
                        :label="option.label"
                        :value="option.id"
                        v-for="option in fields.payrollWorkingType.options"
                ></el-option>
            </el-select>
        </el-form-item>

        <el-form-item :label="fields.payrollStaff.label" :prop="fields.payrollStaff.name">
          <app-autocomplete-one-input
            :fetchFn="fields.payrollStaff.fetchFn"
            v-model="model[fields.payrollStaff.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.payrollDateRange.label" :prop="fields.payrollDateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.payrollDateRange.name]"></el-date-picker>
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
import { PayrollModel } from '@/modules/payroll/payroll-model';

const { fields } = PayrollModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.payrollRef,
  fields.payrollStaff,
  fields.payrollWorkingType,
  fields.payrollStatus,
  fields.payrollDateRange,
]);

export default {
  name: 'app-payroll-list-filter',

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
      loading: 'payroll/list/loading',
      filter: 'payroll/list/filter',
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
      doReset: 'payroll/list/doReset',
      doFetch: 'payroll/list/doFetch',
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
