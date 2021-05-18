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
          :label="fields.stallCover.label"
          :prop="fields.stallCover.name"
          :required="fields.stallCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.stallCover.max"
              :path="fields.stallCover.path"
              :schema="fields.stallCover.fileSchema"
              v-model="model[fields.stallCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallName.label"
          :prop="fields.stallName.name"
          :required="fields.stallName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stallName.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallType.label"
          :prop="fields.stallType.name"
          :required="fields.stallType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.stallType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.stallType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallInfo.label"
          :prop="fields.stallInfo.name"
          :required="fields.stallInfo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.stallInfo.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallLocation.label"
          :prop="fields.stallLocation.name"
          :required="fields.stallLocation.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stallLocation.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallPhoneNumber.label"
          :prop="fields.stallPhoneNumber.name"
          :required="fields.stallPhoneNumber.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stallPhoneNumber.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallEmail.label"
          :prop="fields.stallEmail.name"
          :required="fields.stallEmail.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stallEmail.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallIsStatus.label"
          :prop="fields.stallIsStatus.name"
          :required="fields.stallIsStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.stallIsStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.stallIsStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallPos.label"
          :prop="fields.stallPos.name"
          :required="fields.stallPos.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.stallPos.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.stallPos.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallLoyaltyPointValue.label"
          :prop="fields.stallLoyaltyPointValue.name"
          :required="fields.stallLoyaltyPointValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.stallLoyaltyPointValue.scale" :step="0.1" v-model="model[fields.stallLoyaltyPointValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallCustom1.label"
          :prop="fields.stallCustom1.name"
          :required="fields.stallCustom1.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.stallCustom1.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stallCustom2.label"
          :prop="fields.stallCustom2.name"
          :required="fields.stallCustom2.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.stallCustom2.name]" />
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
import { StallModel } from '@/modules/stall/stall-model';

const { fields } = StallModel;
const formSchema = new FormSchema([
  fields.id,
  fields.stallCover,
  fields.stallName,
  fields.stallType,
  fields.stallInfo,
  fields.stallLocation,
  fields.stallPhoneNumber,
  fields.stallEmail,
  fields.stallIsStatus,
  fields.stallPos,
  fields.stallLoyaltyPointValue,
  fields.stallCustom1,
  fields.stallCustom2,
]);

export default {
  name: 'app-stall-form',

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
