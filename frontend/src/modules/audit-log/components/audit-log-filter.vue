<template>
  <el-card class="box-card" style="margin-bottom: 10px">

  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    :inline="true"
    @submit.native.prevent="doFilter"
    ref="form"
  >
    <el-row>
        <el-form-item  :prop="fields.timestampRange.name">
          <el-date-picker :placeholder="fields.timestampRange.label" type="datetimerange" v-model="model[fields.timestampRange.name]"></el-date-picker>
        </el-form-item>
        <el-form-item :prop="fields.entityNames.name">
          <el-select
            :no-data-text="i18n('auditLog.entityNamesHint')"
            allow-create
            default-first-option
            filterable
            multiple
            :placeholder="fields.entityNames.label"
            v-model="model[fields.entityNames.name]"
          ></el-select>
        </el-form-item>

        <el-form-item :prop="fields.createdByEmail.name">
          <el-input :placeholder="fields.createdByEmail.label" v-model="model[fields.createdByEmail.name]"/>
        </el-form-item>

        <el-form-item :prop="fields.action.name">
          <el-input :placeholder="fields.action.label" v-model="model[fields.action.name]"/>
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
import { AuditLogModel } from '@/modules/audit-log/audit-log-model';
import { i18n } from '@/i18n';

const { fields } = AuditLogModel;

const filterSchema = new FilterSchema([
  fields.timestampRange,
  fields.createdByEmail,
  fields.entityId,
  fields.action,
  fields.entityNames,
]);

export default {
  name: 'app-audit-log-filter',

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
      loading: 'auditLog/loading',
      filter: 'auditLog/filter',
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
      doReset: 'auditLog/doReset',
      doFetch: 'auditLog/doFetch',
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

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
</style>
