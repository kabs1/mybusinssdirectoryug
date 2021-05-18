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
      
        <el-form-item :prop="fields.giftCardName.name">
          <el-input :placeholder="fields.giftCardName.label" v-model="model[fields.giftCardName.name]"/>
        </el-form-item>

      <el-form-item :prop="fields.giftCardStatus.name">
        <el-select :placeholder="fields.giftCardStatus.label" v-model="model[fields.giftCardStatus.name]">
          <el-option :value="undefined">--</el-option>
          <el-option
                  :key="option.id"
                  :label="option.label"
                  :value="option.id"
                  v-for="option in fields.giftCardStatus.options"
          ></el-option>
        </el-select>
      </el-form-item>
      
<!--        <el-form-item-->
<!--          :label="fields.giftCardNoRange.label"-->
<!--          :prop="fields.giftCardNoRange.name"-->
<!--        >-->
<!--          <app-number-range-input v-model="model[fields.giftCardNoRange.name]"/>-->
<!--        </el-form-item>-->

        <el-form-item :label="fields.giftCardCustomer.label" :prop="fields.giftCardCustomer.name">
          <app-autocomplete-one-input
            :fetchFn="fields.giftCardCustomer.fetchFn"
            v-model="model[fields.giftCardCustomer.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.giftCardStall.label" :prop="fields.giftCardStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.giftCardStall.fetchFn"
            v-model="model[fields.giftCardStall.name]"
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
import { GiftCardModel } from '@/modules/gift-card/gift-card-model';

const { fields } = GiftCardModel;

const filterSchema = new FilterSchema([
  fields.giftCardName,
  fields.giftCardNoRange,
  fields.giftCardCustomer,
  fields.giftCardStall,
  fields.giftCardStatus,
]);

export default {
  name: 'app-gift-card-list-filter',

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
      loading: 'giftCard/list/loading',
      filter: 'giftCard/list/filter',
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
      doReset: 'giftCard/list/doReset',
      doFetch: 'giftCard/list/doFetch',
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
