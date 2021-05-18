<template>
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
     
        <el-form-item :prop="fields.priceChangeRef.name">
          <el-input :placeholder="fields.priceChangeRef.label" v-model="model[fields.priceChangeRef.name]"/>
        </el-form-item>
     
        <el-form-item :prop="fields.priceChangeType.name">
          <el-select :placeholder="fields.priceChangeType.label" v-model="model[fields.priceChangeType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.priceChangeType.options"
            ></el-option>
          </el-select>
        </el-form-item>
     
        <el-form-item :label="fields.priceChangeProduct.label" :prop="fields.priceChangeProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.priceChangeProduct.fetchFn"
            v-model="model[fields.priceChangeProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
     
        <el-form-item :label="fields.priceChangeSession.label" :prop="fields.priceChangeSession.name">
          <app-autocomplete-one-input
            :fetchFn="fields.priceChangeSession.fetchFn"
            v-model="model[fields.priceChangeSession.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :prop="fields.priceChangeStatus.name">
          <el-select :placeholder="fields.priceChangeStatus.label" v-model="model[fields.priceChangeStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.priceChangeStatus.options"
            ></el-option>
          </el-select>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { PriceChangeModel } from '@/modules/price-change/price-change-model';

const { fields } = PriceChangeModel;

const filterSchema = new FilterSchema([
  fields.priceChangeRef,
  fields.priceChangeType,
  fields.priceChangeProduct,
  fields.priceChangeSession,
  fields.priceChangeStatus,
]);

export default {
  name: 'app-price-change-list-filter',

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
      loading: 'priceChange/list/loading',
      filter: 'priceChange/list/filter',
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
      doReset: 'priceChange/list/doReset',
      doFetch: 'priceChange/list/doFetch',
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
