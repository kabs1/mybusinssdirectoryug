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
          :label="fields.customerProfile.label"
          :prop="fields.customerProfile.name"
          :required="fields.customerProfile.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.customerProfile.max"
              :path="fields.customerProfile.path"
              :schema="fields.customerProfile.fileSchema"
              v-model="model[fields.customerProfile.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerNames.label"
          :prop="fields.customerNames.name"
          :required="fields.customerNames.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.customerNames.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerEmail.label"
          :prop="fields.customerEmail.name"
          :required="fields.customerEmail.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.customerEmail.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerUserId.label"
          :prop="fields.customerUserId.name"
          :required="fields.customerUserId.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.customerUserId.fetchFn"
              :mapperFn="fields.customerUserId.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.customerUserId.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerPhoneNumber.label"
          :prop="fields.customerPhoneNumber.name"
          :required="fields.customerPhoneNumber.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.customerPhoneNumber.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerLocation.label"
          :prop="fields.customerLocation.name"
          :required="fields.customerLocation.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.customerLocation.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerDiscount.label"
          :prop="fields.customerDiscount.name"
          :required="fields.customerDiscount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.customerDiscount.scale" :step="0.1" v-model="model[fields.customerDiscount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerStatus.label"
          :prop="fields.customerStatus.name"
          :required="fields.customerStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.customerStatus.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.customerStatus.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerCode.label"
          :prop="fields.customerCode.name"
          :required="fields.customerCode.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.customerCode.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerAccountBalance.label"
          :prop="fields.customerAccountBalance.name"
          :required="fields.customerAccountBalance.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.customerAccountBalance.scale" :step="0.1" v-model="model[fields.customerAccountBalance.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerCustomField.label"
          :prop="fields.customerCustomField.name"
          :required="fields.customerCustomField.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.customerCustomField.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerDocs.label"
          :prop="fields.customerDocs.name"
          :required="fields.customerDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.customerDocs.max"
              :path="fields.customerDocs.path"
              :schema="fields.customerDocs.fileSchema"
              v-model="model[fields.customerDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerLoyaltyPoints.label"
          :prop="fields.customerLoyaltyPoints.name"
          :required="fields.customerLoyaltyPoints.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.customerLoyaltyPoints.scale" :step="0.1" v-model="model[fields.customerLoyaltyPoints.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.customerCreditBalance.label"
          :prop="fields.customerCreditBalance.name"
          :required="fields.customerCreditBalance.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.customerCreditBalance.scale" :step="0.1" v-model="model[fields.customerCreditBalance.name]" ></el-input-number>
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
import { CustomersModel } from '@/modules/customers/customers-model';

const { fields } = CustomersModel;
const formSchema = new FormSchema([
  fields.id,
  fields.customerProfile,
  fields.customerNames,
  fields.customerEmail,
  fields.customerUserId,
  fields.customerPhoneNumber,
  fields.customerLocation,
  fields.customerDiscount,
  fields.customerStatus,
  fields.customerCode,
  fields.customerAccountBalance,
  fields.customerCustomField,
  fields.customerDocs,
  fields.customerLoyaltyPoints,
  fields.customerCreditBalance,
]);

export default {
  name: 'app-customers-form',

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
