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
          :label="fields.commStaff.label"
          :prop="fields.commStaff.name"
          :required="fields.commStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.commStaff.fetchFn"
              :mapperFn="fields.commStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.commStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.commSale.label"
          :prop="fields.commSale.name"
          :required="fields.commSale.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-sales-autocomplete-input
              :fetchFn="fields.commSale.fetchFn"
              :mapperFn="fields.commSale.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.commSale.name]"
              mode="single"
            ></app-sales-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.commStall.label"
          :prop="fields.commStall.name"
          :required="fields.commStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.commStall.fetchFn"
              :mapperFn="fields.commStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.commStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.commRegister.label"
          :prop="fields.commRegister.name"
          :required="fields.commRegister.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-register-autocomplete-input
              :fetchFn="fields.commRegister.fetchFn"
              :mapperFn="fields.commRegister.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.commRegister.name]"
              mode="single"
            ></app-register-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.commAmount.label"
          :prop="fields.commAmount.name"
          :required="fields.commAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.commAmount.scale" :step="0.1" v-model="model[fields.commAmount.name]" ></el-input-number>
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
import { CommissionsModel } from '@/modules/commissions/commissions-model';

const { fields } = CommissionsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.commStaff,
  fields.commSale,
  fields.commStall,
  fields.commRegister,
  fields.commAmount,
]);

export default {
  name: 'app-commissions-form',

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
