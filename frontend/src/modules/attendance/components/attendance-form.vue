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
          :label="fields.attendanceRef.label"
          :prop="fields.attendanceRef.name"
          :required="fields.attendanceRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.attendanceRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.attendanceStaff.label"
          :prop="fields.attendanceStaff.name"
          :required="fields.attendanceStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.attendanceStaff.fetchFn"
              :mapperFn="fields.attendanceStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.attendanceStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.attendanceClockIn.label"
          :prop="fields.attendanceClockIn.name"
          :required="fields.attendanceClockIn.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.attendanceClockIn.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.attendanceClockOut.label"
          :prop="fields.attendanceClockOut.name"
          :required="fields.attendanceClockOut.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.attendanceClockOut.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.attendanceNote.label"
          :prop="fields.attendanceNote.name"
          :required="fields.attendanceNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.attendanceNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseStall.label"
          :prop="fields.expenseStall.name"
          :required="fields.expenseStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.expenseStall.fetchFn"
              :mapperFn="fields.expenseStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.expenseStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
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
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;
const formSchema = new FormSchema([
  fields.id,
  fields.attendanceRef,
  fields.attendanceStaff,
  fields.attendanceClockIn,
  fields.attendanceClockOut,
  fields.attendanceNote,
  fields.expenseStall,
]);

export default {
  name: 'app-attendance-form',

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
