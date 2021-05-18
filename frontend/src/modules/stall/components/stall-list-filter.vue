<template>
  <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :inline="true"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      
        <el-form-item :prop="fields.stallName.name">
          <el-input :placeholder="fields.stallName.label" v-model="model[fields.stallName.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.stallType.name">
          <el-select :placeholder="fields.stallType.label" v-model="model[fields.stallType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.stallType.options"
            ></el-option>
          </el-select>
        </el-form-item>
      
        <el-form-item :prop="fields.stallLocation.name">
          <el-input :placeholder="fields.stallLocation.label" v-model="model[fields.stallLocation.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.stallPhoneNumber.name">
          <el-input :placeholder="fields.stallPhoneNumber.label" v-model="model[fields.stallPhoneNumber.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.stallIsStatus.name">
          <el-select :placeholder="fields.stallIsStatus.label" v-model="model[fields.stallIsStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.stallIsStatus.options"
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
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { StallModel } from '@/modules/stall/stall-model';

const { fields } = StallModel;

const filterSchema = new FilterSchema([
  fields.stallName,
  fields.stallType,
  fields.stallLocation,
  fields.stallPhoneNumber,
  fields.stallIsStatus,
]);

export default {
  name: 'app-stall-list-filter',

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
      loading: 'stall/list/loading',
      filter: 'stall/list/filter',
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
      doReset: 'stall/list/doReset',
      doFetch: 'stall/list/doFetch',
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
