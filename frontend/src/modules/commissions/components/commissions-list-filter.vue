<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :inline="true"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>

        <el-form-item :label="fields.commStaff.label" :prop="fields.commStaff.name">
          <app-autocomplete-one-input
            :fetchFn="fields.commStaff.fetchFn"
            v-model="model[fields.commStaff.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.commSale.label" :prop="fields.commSale.name">
          <app-autocomplete-one-input
            :fetchFn="fields.commSale.fetchFn"
            v-model="model[fields.commSale.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.commStall.label" :prop="fields.commStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.commStall.fetchFn"
            v-model="model[fields.commStall.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.commRegister.label" :prop="fields.commRegister.name">
          <app-autocomplete-one-input
            :fetchFn="fields.commRegister.fetchFn"
            v-model="model[fields.commRegister.name]"
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
import { CommissionsModel } from '@/modules/commissions/commissions-model';

const { fields } = CommissionsModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.commStaff,
  fields.commSale,
  fields.commStall,
  fields.commRegister,
]);

export default {
  name: 'app-commissions-list-filter',

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
      loading: 'commissions/list/loading',
      filter: 'commissions/list/filter',
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
      doReset: 'commissions/list/doReset',
      doFetch: 'commissions/list/doFetch',
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
