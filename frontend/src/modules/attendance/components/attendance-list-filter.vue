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
      
        <el-form-item :prop="fields.attendanceRef.name">
          <el-input :placeholder="fields.attendanceRef.label" v-model="model[fields.attendanceRef.name]"/>
        </el-form-item>
      

        <el-form-item :label="fields.attendanceStaff.label" :prop="fields.attendanceStaff.name">
          <app-autocomplete-one-input
            :fetchFn="fields.attendanceStaff.fetchFn"
            v-model="model[fields.attendanceStaff.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      

        <el-form-item :label="fields.attendanceClockInRange.label" :prop="fields.attendanceClockInRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.attendanceClockInRange.name]"></el-date-picker>
        </el-form-item>
      

        <el-form-item :label="fields.attendanceClockOutRange.label" :prop="fields.attendanceClockOutRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.attendanceClockOutRange.name]"></el-date-picker>
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
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

const filterSchema = new FilterSchema([
  fields.attendanceRef,
  fields.attendanceStaff,
  fields.attendanceClockInRange,
  fields.attendanceClockOutRange,
]);

export default {
  name: 'app-attendance-list-filter',

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
      loading: 'attendance/list/loading',
      filter: 'attendance/list/filter',
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
      doReset: 'attendance/list/doReset',
      doFetch: 'attendance/list/doFetch',
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
