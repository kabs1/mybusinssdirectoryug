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
          :label="fields.paymentMethodLogo.label"
          :prop="fields.paymentMethodLogo.name"
          :required="fields.paymentMethodLogo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.paymentMethodLogo.max"
              :path="fields.paymentMethodLogo.path"
              :schema="fields.paymentMethodLogo.fileSchema"
              v-model="model[fields.paymentMethodLogo.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodTitle.label"
          :prop="fields.paymentMethodTitle.name"
          :required="fields.paymentMethodTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.paymentMethodTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodType.label"
          :prop="fields.paymentMethodType.name"
          :required="fields.paymentMethodType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.paymentMethodType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.paymentMethodType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodParams.label"
          :prop="fields.paymentMethodParams.name"
          :required="fields.paymentMethodParams.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodParams.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodResponse.label"
          :prop="fields.paymentMethodResponse.name"
          :required="fields.paymentMethodResponse.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodResponse.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodStatus.label"
          :prop="fields.paymentMethodStatus.name"
          :required="fields.paymentMethodStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodStatus.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodHeader.label"
          :prop="fields.paymentMethodHeader.name"
          :required="fields.paymentMethodHeader.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodHeader.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodApi.label"
          :prop="fields.paymentMethodApi.name"
          :required="fields.paymentMethodApi.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodApi.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodCustom1.label"
          :prop="fields.paymentMethodCustom1.name"
          :required="fields.paymentMethodCustom1.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodCustom1.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.paymentMethodCustom2.label"
          :prop="fields.paymentMethodCustom2.name"
          :required="fields.paymentMethodCustom2.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.paymentMethodCustom2.name]" />
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
import { PaymentMethodsModel } from '@/modules/payment-methods/payment-methods-model';

const { fields } = PaymentMethodsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.paymentMethodLogo,
  fields.paymentMethodTitle,
  fields.paymentMethodType,
  fields.paymentMethodParams,
  fields.paymentMethodResponse,
  fields.paymentMethodStatus,
  fields.paymentMethodHeader,
  fields.paymentMethodApi,
  fields.paymentMethodCustom1,
  fields.paymentMethodCustom2,
]);

export default {
  name: 'app-payment-methods-form',

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
