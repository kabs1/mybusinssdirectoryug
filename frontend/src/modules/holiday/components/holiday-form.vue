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
          :label="fields.holidayCover.label"
          :prop="fields.holidayCover.name"
          :required="fields.holidayCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.holidayCover.max"
              :path="fields.holidayCover.path"
              :schema="fields.holidayCover.fileSchema"
              v-model="model[fields.holidayCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayTitle.label"
          :prop="fields.holidayTitle.name"
          :required="fields.holidayTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.holidayTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayDetails.label"
          :prop="fields.holidayDetails.name"
          :required="fields.holidayDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.holidayDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayStartDate.label"
          :prop="fields.holidayStartDate.name"
          :required="fields.holidayStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.holidayStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayEndDate.label"
          :prop="fields.holidayEndDate.name"
          :required="fields.holidayEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.holidayEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayStall.label"
          :prop="fields.holidayStall.name"
          :required="fields.holidayStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.holidayStall.fetchFn"
              :mapperFn="fields.holidayStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.holidayStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.holidayStaff.label"
          :prop="fields.holidayStaff.name"
          :required="fields.holidayStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.holidayStaff.fetchFn"
              :mapperFn="fields.holidayStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.holidayStaff.name]"
              mode="multiple"
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
import { HolidayModel } from '@/modules/holiday/holiday-model';

const { fields } = HolidayModel;
const formSchema = new FormSchema([
  fields.id,
  fields.holidayCover,
  fields.holidayTitle,
  fields.holidayDetails,
  fields.holidayStartDate,
  fields.holidayEndDate,
  fields.holidayStall,
  fields.holidayStaff,
]);

export default {
  name: 'app-holiday-form',

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
