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
      
        <el-form-item :prop="fields.couponCode.name">
          <el-input :placeholder="fields.couponCode.label" v-model="model[fields.couponCode.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.couponType.name">
          <el-select :placeholder="fields.couponType.label" v-model="model[fields.couponType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.couponType.options"
            ></el-option>
          </el-select>
        </el-form-item>
      
        <el-form-item :prop="fields.couponStatus.name">
          <el-select :placeholder="fields.couponStatus.label" v-model="model[fields.couponStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.couponStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>

      <el-form-item :label="fields.couponStall.label" :prop="fields.couponStall.name">
        <app-autocomplete-one-input
                :fetchFn="fields.couponStall.fetchFn"
                v-model="model[fields.couponStall.name]"
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
import { CouponModel } from '@/modules/coupon/coupon-model';

const { fields } = CouponModel;

const filterSchema = new FilterSchema([
  fields.couponCode,
  fields.couponType,
  fields.couponStall,
  fields.couponStatus,
]);

export default {
  name: 'app-coupon-list-filter',

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
      loading: 'coupon/list/loading',
      filter: 'coupon/list/filter',
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
      doReset: 'coupon/list/doReset',
      doFetch: 'coupon/list/doFetch',
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
