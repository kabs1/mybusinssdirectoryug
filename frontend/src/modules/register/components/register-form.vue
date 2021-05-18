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
          :label="fields.registerRef.label"
          :prop="fields.registerRef.name"
          :required="fields.registerRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.registerRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerStall.label"
          :prop="fields.registerStall.name"
          :required="fields.registerStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.registerStall.fetchFn"
              :mapperFn="fields.registerStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.registerStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerStaff.label"
          :prop="fields.registerStaff.name"
          :required="fields.registerStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.registerStaff.fetchFn"
              :mapperFn="fields.registerStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.registerStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerOpeningValue.label"
          :prop="fields.registerOpeningValue.name"
          :required="fields.registerOpeningValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.registerOpeningValue.scale" :step="0.1" v-model="model[fields.registerOpeningValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerClosingValue.label"
          :prop="fields.registerClosingValue.name"
          :required="fields.registerClosingValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.registerClosingValue.scale" :step="0.1" v-model="model[fields.registerClosingValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerSaleValue.label"
          :prop="fields.registerSaleValue.name"
          :required="fields.registerSaleValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.registerSaleValue.scale" :step="0.1" v-model="model[fields.registerSaleValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerSaleItems.label"
          :prop="fields.registerSaleItems.name"
          :required="fields.registerSaleItems.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.registerSaleItems.scale" :step="0.1" v-model="model[fields.registerSaleItems.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerSaleRef.label"
          :prop="fields.registerSaleRef.name"
          :required="fields.registerSaleRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-sales-autocomplete-input
              :fetchFn="fields.registerSaleRef.fetchFn"
              :mapperFn="fields.registerSaleRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.registerSaleRef.name]"
              mode="multiple"
            ></app-sales-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerReturnsRef.label"
          :prop="fields.registerReturnsRef.name"
          :required="fields.registerReturnsRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-returns-autocomplete-input
              :fetchFn="fields.registerReturnsRef.fetchFn"
              :mapperFn="fields.registerReturnsRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.registerReturnsRef.name]"
              mode="multiple"
            ></app-returns-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerOpenTime.label"
          :prop="fields.registerOpenTime.name"
          :required="fields.registerOpenTime.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.registerOpenTime.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.registerCloseTime.label"
          :prop="fields.registerCloseTime.name"
          :required="fields.registerCloseTime.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.registerCloseTime.name]"></el-date-picker>
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
import { RegisterModel } from '@/modules/register/register-model';

const { fields } = RegisterModel;
const formSchema = new FormSchema([
  fields.id,
  fields.registerRef,
  fields.registerStall,
  fields.registerStaff,
  fields.registerOpeningValue,
  fields.registerClosingValue,
  fields.registerSaleValue,
  fields.registerSaleItems,
  fields.registerSaleRef,
  fields.registerReturnsRef,
  fields.registerOpenTime,
  fields.registerCloseTime,
]);

export default {
  name: 'app-register-form',

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
