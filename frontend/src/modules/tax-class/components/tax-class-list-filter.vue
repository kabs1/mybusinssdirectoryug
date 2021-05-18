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
        <el-form-item :prop="fields.taxClassName.name">
          <el-input :placeholder="fields.taxClassName.label" v-model="model[fields.taxClassName.name]"/>
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
import { TaxClassModel } from '@/modules/tax-class/tax-class-model';

const { fields } = TaxClassModel;

const filterSchema = new FilterSchema([
  fields.taxClassName,
]);

export default {
  name: 'app-tax-class-list-filter',

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
      loading: 'taxClass/list/loading',
      filter: 'taxClass/list/filter',
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
      doReset: 'taxClass/list/doReset',
      doFetch: 'taxClass/list/doFetch',
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
