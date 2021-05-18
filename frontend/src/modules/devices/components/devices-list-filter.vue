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
      
        <el-form-item :prop="fields.deviceName.name">
          <el-input :placeholder="fields.deviceName.label" v-model="model[fields.deviceName.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.deviceSerial.name">
          <el-input :placeholder="fields.deviceSerial.label" v-model="model[fields.deviceSerial.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.deviceType.name">
          <el-select :placeholder="fields.deviceType.label" v-model="model[fields.deviceType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.deviceType.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="fields.deviceCurrency.label" :prop="fields.deviceCurrency.name">
          <app-autocomplete-one-input
            :fetchFn="fields.deviceCurrency.fetchFn"
            v-model="model[fields.deviceCurrency.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      
        <el-form-item :label="fields.deviceStall.label" :prop="fields.deviceStall.name">
          <app-autocomplete-one-input
            :fetchFn="fields.deviceStall.fetchFn"
            v-model="model[fields.deviceStall.name]"
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
import { DevicesModel } from '@/modules/devices/devices-model';

const { fields } = DevicesModel;

const filterSchema = new FilterSchema([
  fields.deviceName,
  fields.deviceSerial,
  fields.deviceType,
  fields.deviceCurrency,
  fields.deviceStall,
]);

export default {
  name: 'app-devices-list-filter',

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
      loading: 'devices/list/loading',
      filter: 'devices/list/filter',
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
      doReset: 'devices/list/doReset',
      doFetch: 'devices/list/doFetch',
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
