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

      <el-form-item :prop="fields.returnRefNo.name">
        <el-input :placeholder="fields.returnRefNo.label" v-model="model[fields.returnRefNo.name]"/>
      </el-form-item>

      <el-form-item :prop="fields.returnsFrom.name">
        <el-select :placeholder="fields.returnsFrom.label" v-model="model[fields.returnsFrom.name]">
          <el-option :value="undefined">--</el-option>
          <el-option
                  :key="option.id"
                  :label="option.label"
                  :value="option.id"
                  v-for="option in fields.returnsFrom.options"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
        </el-form-item>

        <el-form-item :label="fields.returnProduct.label" :prop="fields.returnProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.returnProduct.fetchFn"
            v-model="model[fields.returnProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :placeholder="fields.returnIdentifier.label" :prop="fields.returnIdentifier.name">
          <el-input :placeholder="fields.returnIdentifier.label" v-model="model[fields.returnIdentifier.name]"/>
        </el-form-item>
      

      
        <el-form-item :label="fields.returnStall.label" :prop="fields.returnStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.returnStall.fetchFn"
            v-model="model[fields.returnStall.name]"
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
import { ReturnsModel } from '@/modules/returns/returns-model';

const { fields } = ReturnsModel;

const filterSchema = new FilterSchema([
  fields.createdAtRange,
  fields.returnRefNo,
  fields.returnProduct,
  fields.returnsFrom,
  fields.returnIdentifier,
  fields.returnStall,
]);

export default {
  name: 'app-returns-list-filter',

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
      loading: 'returns/list/loading',
      filter: 'returns/list/filter',
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
      doReset: 'returns/list/doReset',
      doFetch: 'returns/list/doFetch',
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
