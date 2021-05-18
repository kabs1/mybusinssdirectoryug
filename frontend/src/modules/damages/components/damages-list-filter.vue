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
      
        <el-form-item :prop="fields.damageRef.name">
          <el-input :placeholder="fields.damageRef.label" v-model="model[fields.damageRef.name]"/>
        </el-form-item>
      
        <el-form-item :label="fields.damageProduct.label" :prop="fields.damageProduct.name">
          <app-autocomplete-one-input
            :fetchFn="fields.damageProduct.fetchFn"
            v-model="model[fields.damageProduct.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.damageDateRange.label" :prop="fields.damageDateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.damageDateRange.name]"></el-date-picker>
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
import { DamagesModel } from '@/modules/damages/damages-model';

const { fields } = DamagesModel;

const filterSchema = new FilterSchema([
  fields.damageRef,
  fields.damageProduct,
  fields.damageDateRange,
]);

export default {
  name: 'app-damages-list-filter',

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
      loading: 'damages/list/loading',
      filter: 'damages/list/filter',
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
      doReset: 'damages/list/doReset',
      doFetch: 'damages/list/doFetch',
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
