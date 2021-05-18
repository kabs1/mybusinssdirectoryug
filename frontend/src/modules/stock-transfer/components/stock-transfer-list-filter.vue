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
      
        <el-form-item :prop="fields.transferRef.name">
          <el-input :placeholder="fields.transferRef.label" v-model="model[fields.transferRef.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.transferStatus.name">
            <el-select :placeholder="fields.transferStatus.label" v-model="model[fields.transferStatus.name]">
                <el-option :value="undefined">--</el-option>
                <el-option
                        :key="option.id"
                        :label="option.label"
                        :value="option.id"
                        v-for="option in fields.transferStatus.options"
                ></el-option>
            </el-select>
        </el-form-item>
      
        <el-form-item :label="fields.transferProduct.label" :prop="fields.transferProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.transferProduct.fetchFn"
            v-model="model[fields.transferProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.transferStallFrom.label" :prop="fields.transferStallFrom.name">
          <app-autocomplete-one-input
            :fetchFn="fields.transferStallFrom.fetchFn"
            v-model="model[fields.transferStallFrom.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.transferStallTo.label" :prop="fields.transferStallTo.name">
          <app-autocomplete-one-input
            :fetchFn="fields.transferStallTo.fetchFn"
            v-model="model[fields.transferStallTo.name]"
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
import { StockTransferModel } from '@/modules/stock-transfer/stock-transfer-model';

const { fields } = StockTransferModel;

const filterSchema = new FilterSchema([
  fields.transferRef,
  fields.transferProduct,
  fields.transferStallFrom,
  fields.transferStallTo,
  fields.transferStatus,
]);

export default {
  name: 'app-stock-transfer-list-filter',

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
      loading: 'stockTransfer/list/loading',
      filter: 'stockTransfer/list/filter',
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
      doReset: 'stockTransfer/list/doReset',
      doFetch: 'stockTransfer/list/doFetch',
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
