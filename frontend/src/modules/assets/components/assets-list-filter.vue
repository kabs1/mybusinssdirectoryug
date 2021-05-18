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
      
        <el-form-item :prop="fields.assetName.name">
          <el-input :placeholder="fields.assetName.label" v-model="model[fields.assetName.name]"/>
        </el-form-item>
      

        <el-form-item :label="fields.assetPurchaseDateRange.label" :prop="fields.assetPurchaseDateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.assetPurchaseDateRange.name]"></el-date-picker>
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
import { AssetsModel } from '@/modules/assets/assets-model';

const { fields } = AssetsModel;

const filterSchema = new FilterSchema([
  fields.assetName,
  fields.assetPurchaseDateRange,
]);

export default {
  name: 'app-assets-list-filter',

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
      loading: 'assets/list/loading',
      filter: 'assets/list/filter',
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
      doReset: 'assets/list/doReset',
      doFetch: 'assets/list/doFetch',
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
