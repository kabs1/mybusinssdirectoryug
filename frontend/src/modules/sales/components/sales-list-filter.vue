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
      
        <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
        </el-form-item>

      
        <el-form-item
          :label="fields.salesInvoiceNoRange.label"
          :prop="fields.salesInvoiceNoRange.name"
        >
          <app-number-range-input v-model="model[fields.salesInvoiceNoRange.name]"/>
        </el-form-item>
      

      
        <el-form-item :label="fields.salesCustomer.label" :prop="fields.salesCustomer.name">
          <app-autocomplete-one-input
            :fetchFn="fields.salesCustomer.fetchFn"
            v-model="model[fields.salesCustomer.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
<!--        <el-form-item :label="fields.salesPaymentStatus.label" :prop="fields.salesPaymentStatus.name">-->
<!--          <el-select placeholder v-model="model[fields.salesPaymentStatus.name]">-->
<!--            <el-option :value="undefined">&#45;&#45;</el-option>-->
<!--            <el-option-->
<!--              :key="option.id"-->
<!--              :label="option.label"-->
<!--              :value="option.id"-->
<!--              v-for="option in fields.salesPaymentStatus.options"-->
<!--            ></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
      

      
        <el-form-item :label="fields.saleDevice.label" :prop="fields.saleDevice.name">
          <app-autocomplete-one-input
            :fetchFn="fields.saleDevice.fetchFn"
            v-model="model[fields.saleDevice.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
        <el-form-item :label="fields.giftCard.label" :prop="fields.giftCard.name">
          <app-autocomplete-one-input
            :fetchFn="fields.giftCard.fetchFn"
            v-model="model[fields.giftCard.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
        <el-form-item :label="fields.salesStall.label" :prop="fields.salesStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.salesStall.fetchFn"
            v-model="model[fields.salesStall.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

      
        <el-form-item :label="fields.salesRegister.label" :prop="fields.salesRegister.name">
          <app-autocomplete-one-input
            :fetchFn="fields.salesRegister.fetchFn"
            v-model="model[fields.salesRegister.name]"
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
import { SalesModel } from '@/modules/sales/sales-model';

const { fields } = SalesModel;

const filterSchema = new FilterSchema([
  fields.createdAtRange,
  fields.salesInvoiceNoRange,
  fields.salesCustomer,
  fields.salesPaymentStatus,
  fields.saleDevice,
  fields.giftCard,
  fields.salesStall,
  fields.salesRegister,
]);

export default {
  name: 'app-sales-list-filter',

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
      loading: 'sales/list/loading',
      filter: 'sales/list/filter',
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
      doReset: 'sales/list/doReset',
      doFetch: 'sales/list/doFetch',
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
