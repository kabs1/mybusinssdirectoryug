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

        <el-form-item :label="fields.sessionDevice.label" :prop="fields.sessionDevice.name">
          <app-autocomplete-one-input
            :fetchFn="fields.sessionDevice.fetchFn"
            v-model="model[fields.sessionDevice.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :label="fields.sessionLoginDateRange.label" :prop="fields.sessionLoginDateRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.sessionLoginDateRange.name]"></el-date-picker>
        </el-form-item>
      
        <el-form-item :label="fields.sessionUser.label" :prop="fields.sessionUser.name">
          <app-autocomplete-one-input
            :fetchFn="fields.sessionUser.fetchFn"
            v-model="model[fields.sessionUser.name]"
          ></app-autocomplete-one-input>
        </el-form-item>

        <el-form-item :prop="fields.sessionDeviceType.name">
          <el-select :placeholder="fields.sessionDeviceType.label" v-model="model[fields.sessionDeviceType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.sessionDeviceType.options"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :prop="fields.sessionIp.name">
          <el-input :placeholder="fields.sessionIp.label" v-model="model[fields.sessionIp.name]"/>
        </el-form-item>
      
        <el-form-item :prop="fields.sessionNetwork.name">
          <el-input :placeholder="fields.sessionNetwork.label" v-model="model[fields.sessionNetwork.name]"/>
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
import { DeviceSessionsModel } from '@/modules/device-sessions/device-sessions-model';

const { fields } = DeviceSessionsModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.sessionDevice,
  fields.sessionLoginDateRange,
  fields.sessionUser,
  fields.sessionDeviceType,
  fields.sessionIp,
  fields.sessionNetwork,
]);

export default {
  name: 'app-device-sessions-list-filter',

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
      loading: 'deviceSessions/list/loading',
      filter: 'deviceSessions/list/filter',
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
      doReset: 'deviceSessions/list/doReset',
      doFetch: 'deviceSessions/list/doFetch',
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
