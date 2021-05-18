<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :disabled="true" v-model="model[fields.id.name]" />
        </el-col>
      </el-form-item>
              <el-form-item
          :label="fields.payrollRef.label"
          :prop="fields.payrollRef.name"
          :required="fields.payrollRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.payrollRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollStaff.label"
          :prop="fields.payrollStaff.name"
          :required="fields.payrollStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.payrollStaff.fetchFn"
              :mapperFn="fields.payrollStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.payrollStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollSalary.label"
          :prop="fields.payrollSalary.name"
          :required="fields.payrollSalary.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.payrollSalary.scale" :step="0.1" v-model="model[fields.payrollSalary.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollAd.label"
          :prop="fields.payrollAd.name"
          :required="fields.payrollAd.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-allowance-and-deduction-autocomplete-input
              :fetchFn="fields.payrollAd.fetchFn"
              :mapperFn="fields.payrollAd.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.payrollAd.name]"
              mode="multiple"
            ></app-allowance-and-deduction-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollDocs.label"
          :prop="fields.payrollDocs.name"
          :required="fields.payrollDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.payrollDocs.max"
              :path="fields.payrollDocs.path"
              :schema="fields.payrollDocs.fileSchema"
              v-model="model[fields.payrollDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollWorkingType.label"
          :prop="fields.payrollWorkingType.name"
          :required="fields.payrollWorkingType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.payrollWorkingType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.payrollWorkingType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollWorkingTime.label"
          :prop="fields.payrollWorkingTime.name"
          :required="fields.payrollWorkingTime.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.payrollWorkingTime.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollStatus.label"
          :prop="fields.payrollStatus.name"
          :required="fields.payrollStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.payrollStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.payrollStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.payrollDate.label"
          :prop="fields.payrollDate.name"
          :required="fields.payrollDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.payrollDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>
      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { PayrollModel } from '@/modules/payroll/payroll-model';

const { fields } = PayrollModel;
const formSchema = new FormSchema([
  fields.id,
  fields.payrollRef,
  fields.payrollStaff,
  fields.payrollSalary,
  fields.payrollAd,
  fields.payrollDocs,
  fields.payrollWorkingType,
  fields.payrollWorkingTime,
  fields.payrollStatus,
  fields.payrollDate,
]);

export default {
  name: 'app-payroll-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      return this.$emit('submit', {
        id,
        values,
      });
    },
  },
};
</script>

<style>
</style>
