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
          :label="fields.supplierProfile.label"
          :prop="fields.supplierProfile.name"
          :required="fields.supplierProfile.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.supplierProfile.max"
              :path="fields.supplierProfile.path"
              :schema="fields.supplierProfile.fileSchema"
              v-model="model[fields.supplierProfile.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierNames.label"
          :prop="fields.supplierNames.name"
          :required="fields.supplierNames.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierNames.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierBusinessName.label"
          :prop="fields.supplierBusinessName.name"
          :required="fields.supplierBusinessName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierBusinessName.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierEmail.label"
          :prop="fields.supplierEmail.name"
          :required="fields.supplierEmail.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierEmail.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierLocation.label"
          :prop="fields.supplierLocation.name"
          :required="fields.supplierLocation.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierLocation.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierPhoneNumber.label"
          :prop="fields.supplierPhoneNumber.name"
          :required="fields.supplierPhoneNumber.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierPhoneNumber.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierPayTerm.label"
          :prop="fields.supplierPayTerm.name"
          :required="fields.supplierPayTerm.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.supplierPayTerm.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.supplierPayTerm.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierPayType.label"
          :prop="fields.supplierPayType.name"
          :required="fields.supplierPayType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.supplierPayType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.supplierPayType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierStatus.label"
          :prop="fields.supplierStatus.name"
          :required="fields.supplierStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.supplierStatus.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.supplierStatus.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierCreditBalance.label"
          :prop="fields.supplierCreditBalance.name"
          :required="fields.supplierCreditBalance.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.supplierCreditBalance.scale" :step="0.1" v-model="model[fields.supplierCreditBalance.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.supplierDocs.label"
          :prop="fields.supplierDocs.name"
          :required="fields.supplierDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.supplierDocs.max"
              :path="fields.supplierDocs.path"
              :schema="fields.supplierDocs.fileSchema"
              v-model="model[fields.supplierDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.userId.label"
          :prop="fields.userId.name"
          :required="fields.userId.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.userId.fetchFn"
              :mapperFn="fields.userId.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.userId.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
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
import { SuppliersModel } from '@/modules/suppliers/suppliers-model';

const { fields } = SuppliersModel;
const formSchema = new FormSchema([
  fields.id,
  fields.supplierProfile,
  fields.supplierNames,
  fields.supplierBusinessName,
  fields.supplierEmail,
  fields.supplierLocation,
  fields.supplierPhoneNumber,
  fields.supplierPayTerm,
  fields.supplierPayType,
  fields.supplierStatus,
  fields.supplierCreditBalance,
  fields.supplierDocs,
  fields.userId,
]);

export default {
  name: 'app-suppliers-form',

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
