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
          :label="fields.sessionDevice.label"
          :prop="fields.sessionDevice.name"
          :required="fields.sessionDevice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-devices-autocomplete-input
              :fetchFn="fields.sessionDevice.fetchFn"
              :mapperFn="fields.sessionDevice.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.sessionDevice.name]"
              mode="single"
            ></app-devices-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionLoginDate.label"
          :prop="fields.sessionLoginDate.name"
          :required="fields.sessionLoginDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.sessionLoginDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionLogoutDate.label"
          :prop="fields.sessionLogoutDate.name"
          :required="fields.sessionLogoutDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.sessionLogoutDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionUser.label"
          :prop="fields.sessionUser.name"
          :required="fields.sessionUser.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.sessionUser.fetchFn"
              :mapperFn="fields.sessionUser.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.sessionUser.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionDeviceType.label"
          :prop="fields.sessionDeviceType.name"
          :required="fields.sessionDeviceType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.sessionDeviceType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.sessionDeviceType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionIp.label"
          :prop="fields.sessionIp.name"
          :required="fields.sessionIp.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.sessionIp.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.sessionNetwork.label"
          :prop="fields.sessionNetwork.name"
          :required="fields.sessionNetwork.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.sessionNetwork.name]" />
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
import { DeviceSessionsModel } from '@/modules/device-sessions/device-sessions-model';

const { fields } = DeviceSessionsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.sessionDevice,
  fields.sessionLoginDate,
  fields.sessionLogoutDate,
  fields.sessionUser,
  fields.sessionDeviceType,
  fields.sessionIp,
  fields.sessionNetwork,
]);

export default {
  name: 'app-device-sessions-form',

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
