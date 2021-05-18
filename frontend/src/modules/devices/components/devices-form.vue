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
          :label="fields.deviceImage.label"
          :prop="fields.deviceImage.name"
          :required="fields.deviceImage.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.deviceImage.max"
              :path="fields.deviceImage.path"
              :schema="fields.deviceImage.fileSchema"
              v-model="model[fields.deviceImage.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceName.label"
          :prop="fields.deviceName.name"
          :required="fields.deviceName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.deviceName.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceSerial.label"
          :prop="fields.deviceSerial.name"
          :required="fields.deviceSerial.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.deviceSerial.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceType.label"
          :prop="fields.deviceType.name"
          :required="fields.deviceType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.deviceType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.deviceType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceCurrency.label"
          :prop="fields.deviceCurrency.name"
          :required="fields.deviceCurrency.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-currency-autocomplete-input
              :fetchFn="fields.deviceCurrency.fetchFn"
              :mapperFn="fields.deviceCurrency.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.deviceCurrency.name]"
              mode="single"
            ></app-currency-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceNote.label"
          :prop="fields.deviceNote.name"
          :required="fields.deviceNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.deviceNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceDocs.label"
          :prop="fields.deviceDocs.name"
          :required="fields.deviceDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.deviceDocs.max"
              :path="fields.deviceDocs.path"
              :schema="fields.deviceDocs.fileSchema"
              v-model="model[fields.deviceDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.deviceStall.label"
          :prop="fields.deviceStall.name"
          :required="fields.deviceStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.deviceStall.fetchFn"
              :mapperFn="fields.deviceStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.deviceStall.name]"
              mode="single"
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
import { DevicesModel } from '@/modules/devices/devices-model';

const { fields } = DevicesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.deviceImage,
  fields.deviceName,
  fields.deviceSerial,
  fields.deviceType,
  fields.deviceCurrency,
  fields.deviceNote,
  fields.deviceDocs,
  fields.deviceStall,
]);

export default {
  name: 'app-devices-form',

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
