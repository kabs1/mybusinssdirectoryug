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
          :label="fields.leaveRef.label"
          :prop="fields.leaveRef.name"
          :required="fields.leaveRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.leaveRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveUserId.label"
          :prop="fields.leaveUserId.name"
          :required="fields.leaveUserId.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.leaveUserId.fetchFn"
              :mapperFn="fields.leaveUserId.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.leaveUserId.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveType.label"
          :prop="fields.leaveType.name"
          :required="fields.leaveType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-leave-type-autocomplete-input
              :fetchFn="fields.leaveType.fetchFn"
              :mapperFn="fields.leaveType.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.leaveType.name]"
              mode="single"
            ></app-leave-type-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveStartDate.label"
          :prop="fields.leaveStartDate.name"
          :required="fields.leaveStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.leaveStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveEndDate.label"
          :prop="fields.leaveEndDate.name"
          :required="fields.leaveEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.leaveEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveNote.label"
          :prop="fields.leaveNote.name"
          :required="fields.leaveNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.leaveNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveDocs.label"
          :prop="fields.leaveDocs.name"
          :required="fields.leaveDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.leaveDocs.max"
              :path="fields.leaveDocs.path"
              :schema="fields.leaveDocs.fileSchema"
              v-model="model[fields.leaveDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.leaveAssignedStaff.label"
          :prop="fields.leaveAssignedStaff.name"
          :required="fields.leaveAssignedStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.leaveAssignedStaff.fetchFn"
              :mapperFn="fields.leaveAssignedStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.leaveAssignedStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
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
import { LeaveModel } from '@/modules/leave/leave-model';

const { fields } = LeaveModel;
const formSchema = new FormSchema([
  fields.id,
  fields.leaveRef,
  fields.leaveUserId,
  fields.leaveType,
  fields.leaveStartDate,
  fields.leaveEndDate,
  fields.leaveNote,
  fields.leaveDocs,
  fields.leaveAssignedStaff,
]);

export default {
  name: 'app-leave-form',

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
