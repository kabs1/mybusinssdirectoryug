<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="left"
    :label-width="labelWidthFilter"
    :model="model"
    :inline="true"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>

        <el-form-item :prop="fields.stockAdjustmentRef.name">
          <el-input :placeholder="fields.stockAdjustmentRef.label" v-model="model[fields.stockAdjustmentRef.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.stockAdjustmentType.name">
          <el-select :placeholder="fields.stockAdjustmentType.label" v-model="model[fields.stockAdjustmentType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
                    :key="option.id"
                    :label="option.label"
                    :value="option.id"
                    v-for="option in fields.stockAdjustmentType.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item  :prop="fields.stockAdjustmentClass.name">
          <el-select :placeholder="fields.stockAdjustmentClass.label" v-model="model[fields.stockAdjustmentClass.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
                    :key="option.id"
                    :label="option.label"
                    :value="option.id"
                    v-for="option in fields.stockAdjustmentClass.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
        </el-form-item>
     
        <el-form-item :label="fields.stockAdjustmentProduct.label" :prop="fields.stockAdjustmentProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.stockAdjustmentProduct.fetchFn"
            v-model="model[fields.stockAdjustmentProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
     
        <el-form-item :label="fields.adjustmentStall.label" :prop="fields.adjustmentStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.adjustmentStall.fetchFn"
            v-model="model[fields.adjustmentStall.name]"
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
import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';

const { fields } = StockAdjustmentsModel;

const filterSchema = new FilterSchema([
  fields.createdAtRange,
  fields.stockAdjustmentRef,
  fields.stockAdjustmentProduct,
  fields.stockAdjustmentType,
  fields.adjustmentStall,
  fields.stockAdjustmentClass,
]);

export default {
  name: 'app-stock-adjustments-list-filter',

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
      loading: 'stockAdjustments/list/loading',
      filter: 'stockAdjustments/list/filter',
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
      doReset: 'stockAdjustments/list/doReset',
      doFetch: 'stockAdjustments/list/doFetch',
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
