<template>
  <el-card class="box-card" style="margin-bottom: 10px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :inline="true"
    :rules="rules"
    class="filter"
    @submit.native.prevent="doFilter"
    ref="form"
  >
    <el-row>
        <el-form-item :prop="fields.customerNames.name">
          <el-input :placeholder="fields.customerNames.label" v-model="model[fields.customerNames.name]"/>
        </el-form-item>

        <el-form-item  :prop="fields.customerStatus.name">
          <el-select :placeholder="fields.customerStatus.label" v-model="model[fields.customerStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.customerStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>
      <div class="filter-buttons">
        <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary" round>
          <app-i18n code="common.search"></app-i18n>
        </el-button>

        <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo" round>
          <app-i18n code="common.reset"></app-i18n>
        </el-button>
      </div>
    </el-row>
  </el-form>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { CustomersModel } from '@/modules/customers/customers-model';

const { fields } = CustomersModel;

const filterSchema = new FilterSchema([
  fields.customerNames,
  fields.customerDiscountRange,
  fields.customerStatus,
]);

export default {
  name: 'app-customers-list-filter',

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
      loading: 'customers/list/loading',
      filter: 'customers/list/filter',
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
      doReset: 'customers/list/doReset',
      doFetch: 'customers/list/doFetch',
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
