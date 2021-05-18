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
      
        <el-form-item :prop="fields.adRef.name">
          <el-input :placeholder="fields.adRef.label" v-model="model[fields.adRef.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.adType.name">
          <el-select :placeholder="fields.adType.label" v-model="model[fields.adType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.adType.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="fields.adStaff.label" :prop="fields.adStaff.name">
          <app-autocomplete-one-input
            :fetchFn="fields.adStaff.fetchFn"
            v-model="model[fields.adStaff.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.adStall.label" :prop="fields.adStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.adStall.fetchFn"
            v-model="model[fields.adStall.name]"
          ></app-autocomplete-one-input>
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
import { AllowanceAndDeductionModel } from '@/modules/allowance-and-deduction/allowance-and-deduction-model';

const { fields } = AllowanceAndDeductionModel;

const filterSchema = new FilterSchema([
  fields.adRef,
  fields.adType,
  fields.adStaff,
  fields.adStall,
]);

export default {
  name: 'app-allowance-and-deduction-list-filter',

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
      loading: 'allowanceAndDeduction/list/loading',
      filter: 'allowanceAndDeduction/list/filter',
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
      doReset: 'allowanceAndDeduction/list/doReset',
      doFetch: 'allowanceAndDeduction/list/doFetch',
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
