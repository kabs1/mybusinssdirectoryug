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
      
        <el-form-item :prop="fields.productName.name">
          <el-input :placeholder="fields.productName.label" v-model="model[fields.productName.name]"/>
        </el-form-item>

      <el-form-item :prop="fields.productEnableStock.name">
        <el-select :placeholder="fields.productEnableStock.label" v-model="model[fields.productEnableStock.name]">
          <el-option :value="undefined">--</el-option>
          <el-option
                  :key="option.id"
                  :label="option.label"
                  :value="option.id"
                  v-for="option in fields.productEnableStock.options"
          ></el-option>
        </el-select>
      </el-form-item>



      <el-form-item  :prop="fields.productStatus.name">
        <el-select :placeholder="fields.productStatus.label" v-model="model[fields.productStatus.name]">
          <el-option :value="undefined">--</el-option>
          <el-option
                  :key="option.id"
                  :label="option.label"
                  :value="option.id"
                  v-for="option in fields.productStatus.options"
          ></el-option>
        </el-select>
      </el-form-item>

      
        <el-form-item :label="fields.productBrand.label" :prop="fields.productBrand.name">
          <app-autocomplete-one-input
            :fetchFn="fields.productBrand.fetchFn"
            v-model="model[fields.productBrand.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
        <el-form-item :label="fields.productCategory.label" :prop="fields.productCategory.name">
          <app-autocomplete-one-input
            :fetchFn="fields.productCategory.fetchFn"
            placeholder="Please input"
            v-model="model[fields.productCategory.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
        <el-form-item :label="fields.productTax.label" :prop="fields.productTax.name">
          <app-autocomplete-one-input
            :fetchFn="fields.productTax.fetchFn"
            v-model="model[fields.productTax.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.productVariation.label" :prop="fields.productVariation.name">
          <app-autocomplete-one-input
            :fetchFn="fields.productVariation.fetchFn"
            v-model="model[fields.productVariation.name]"
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
import { ProductsModel } from '@/modules/products/products-model';

const { fields } = ProductsModel;

const filterSchema = new FilterSchema([
  fields.productName,
  fields.productUnit,
  fields.productBrand,
  fields.productCategory,
  fields.productTax,
  fields.productEnableStock,
  fields.productStatus,
  fields.productVariation,
]);

export default {
  name: 'app-products-list-filter',

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
      loading: 'products/list/loading',
      filter: 'products/list/filter',
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
      doReset: 'products/list/doReset',
      doFetch: 'products/list/doFetch',
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
