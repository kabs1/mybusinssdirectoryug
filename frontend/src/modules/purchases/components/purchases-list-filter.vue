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
      
        <el-form-item :prop="fields.purchasesRef.name">
          <el-input :placeholder="fields.purchasesRef.label" v-model="model[fields.purchasesRef.name]"/>
        </el-form-item>
      
        <el-form-item :label="fields.purchaseProduct.label" :prop="fields.purchaseProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.purchaseProduct.fetchFn"
            v-model="model[fields.purchaseProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.purchaseSupplier.label" :prop="fields.purchaseSupplier.name">
          <app-autocomplete-one-input
            :fetchFn="fields.purchaseSupplier.fetchFn"
            v-model="model[fields.purchaseSupplier.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

      
        <el-form-item :prop="fields.purchasePaymentStatus.name">
          <el-select :placeholder="fields.purchasePaymentStatus.label" v-model="model[fields.purchasePaymentStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.purchasePaymentStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="fields.purchaseTotalAmountRange.label" :prop="fields.purchaseTotalAmountRange.name">
          <app-number-range-input v-model="model[fields.purchaseTotalAmountRange.name]"/>
        </el-form-item>
      
        <el-form-item :label="fields.purchaseStall.label" :prop="fields.purchaseStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.purchaseStall.fetchFn"
            v-model="model[fields.purchaseStall.name]"
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
import { PurchasesModel } from '@/modules/purchases/purchases-model';

const { fields } = PurchasesModel;

const filterSchema = new FilterSchema([
  fields.purchasesRef,
  fields.purchaseProduct,
  fields.purchaseSupplier,
  fields.purchasePaymentStatus,
  fields.purchaseTotalAmountRange,
  fields.purchaseStall,
]);

export default {
  name: 'app-purchases-list-filter',

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
      loading: 'purchases/list/loading',
      filter: 'purchases/list/filter',
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
      doReset: 'purchases/list/doReset',
      doFetch: 'purchases/list/doFetch',
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
