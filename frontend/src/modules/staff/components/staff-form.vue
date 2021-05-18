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
          :label="fields.staffProfile.label"
          :prop="fields.staffProfile.name"
          :required="fields.staffProfile.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.staffProfile.max"
              :path="fields.staffProfile.path"
              :schema="fields.staffProfile.fileSchema"
              v-model="model[fields.staffProfile.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffNames.label"
          :prop="fields.staffNames.name"
          :required="fields.staffNames.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.staffNames.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffUserId.label"
          :prop="fields.staffUserId.name"
          :required="fields.staffUserId.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.staffUserId.fetchFn"
              :mapperFn="fields.staffUserId.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.staffUserId.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffPhoneNumber.label"
          :prop="fields.staffPhoneNumber.name"
          :required="fields.staffPhoneNumber.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.staffPhoneNumber.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffAbout.label"
          :prop="fields.staffAbout.name"
          :required="fields.staffAbout.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.staffAbout.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffCustomInfo.label"
          :prop="fields.staffCustomInfo.name"
          :required="fields.staffCustomInfo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.staffCustomInfo.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffCv.label"
          :prop="fields.staffCv.name"
          :required="fields.staffCv.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.staffCv.max"
              :path="fields.staffCv.path"
              :schema="fields.staffCv.fileSchema"
              v-model="model[fields.staffCv.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffDocuments.label"
          :prop="fields.staffDocuments.name"
          :required="fields.staffDocuments.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.staffDocuments.max"
              :path="fields.staffDocuments.path"
              :schema="fields.staffDocuments.fileSchema"
              v-model="model[fields.staffDocuments.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffIsAServiceWorker.label"
          :prop="fields.staffIsAServiceWorker.name"
          :required="fields.staffIsAServiceWorker.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.staffIsAServiceWorker.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.staffIsAServiceWorker.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffCommision.label"
          :prop="fields.staffCommision.name"
          :required="fields.staffCommision.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.staffCommision.scale" :step="0.1" v-model="model[fields.staffCommision.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffDateOfBirth.label"
          :prop="fields.staffDateOfBirth.name"
          :required="fields.staffDateOfBirth.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.staffDateOfBirth.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffMaritalStatus.label"
          :prop="fields.staffMaritalStatus.name"
          :required="fields.staffMaritalStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.staffMaritalStatus.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.staffMaritalStatus.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffIdentityCard.label"
          :prop="fields.staffIdentityCard.name"
          :required="fields.staffIdentityCard.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.staffIdentityCard.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.staffAccessApps.label"
          :prop="fields.staffAccessApps.name"
          :required="fields.staffAccessApps.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.staffAccessApps.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.staffAccessApps.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
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
import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;
const formSchema = new FormSchema([
  fields.id,
  fields.staffProfile,
  fields.staffNames,
  fields.staffUserId,
  fields.staffPhoneNumber,
  fields.staffAbout,
  fields.staffCustomInfo,
  fields.staffCv,
  fields.staffDocuments,
  fields.staffIsAServiceWorker,
  fields.staffCommision,
  fields.staffDateOfBirth,
  fields.staffMaritalStatus,
  fields.staffIdentityCard,
  fields.staffAccessApps,
]);

export default {
  name: 'app-staff-form',

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
