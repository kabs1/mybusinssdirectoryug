<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    :inline="true"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      
        <el-form-item :prop="fields.registerRef.name">
          <el-input :placeholder="fields.registerRef.label" v-model="model[fields.registerRef.name]"/>
        </el-form-item>
      
        <el-form-item :label="fields.registerStall.label" :prop="fields.registerStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.registerStall.fetchFn"
            v-model="model[fields.registerStall.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.registerStaff.label" :prop="fields.registerStaff.name">
          <app-autocomplete-one-input
            :fetchFn="fields.registerStaff.fetchFn"
            v-model="model[fields.registerStaff.name]"
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
import { RegisterModel } from '@/modules/register/register-model';

const { fields } = RegisterModel;

const filterSchema = new FilterSchema([
  fields.registerRef,
  fields.registerStall,
  fields.registerStaff,
]);

export default {
  name: 'app-register-list-filter',

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
      loading: 'register/list/loading',
      filter: 'register/list/filter',
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
      doReset: 'register/list/doReset',
      doFetch: 'register/list/doFetch',
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
