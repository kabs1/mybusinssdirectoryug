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
        <el-form-item :prop="fields.categoryTitle.name">
          <el-input :placeholder="fields.categoryTitle.label" v-model="model[fields.categoryTitle.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.categoryShortCode.name">
          <el-input :placeholder="fields.categoryShortCode.label" v-model="model[fields.categoryShortCode.name]"/>
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
import { CategoriesModel } from '@/modules/categories/categories-model';

const { fields } = CategoriesModel;

const filterSchema = new FilterSchema([
  fields.categoryTitle,
  fields.categoryShortCode,
]);

export default {
  name: 'app-categories-list-filter',

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
      loading: 'categories/list/loading',
      filter: 'categories/list/filter',
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
      doReset: 'categories/list/doReset',
      doFetch: 'categories/list/doFetch',
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
