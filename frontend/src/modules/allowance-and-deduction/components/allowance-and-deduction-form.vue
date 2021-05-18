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
          :label="fields.adRef.label"
          :prop="fields.adRef.name"
          :required="fields.adRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.adRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adType.label"
          :prop="fields.adType.name"
          :required="fields.adType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.adType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.adType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adStaff.label"
          :prop="fields.adStaff.name"
          :required="fields.adStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.adStaff.fetchFn"
              :mapperFn="fields.adStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adStaff.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adAmmount.label"
          :prop="fields.adAmmount.name"
          :required="fields.adAmmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.adAmmount.scale" :step="0.1" v-model="model[fields.adAmmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adStall.label"
          :prop="fields.adStall.name"
          :required="fields.adStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.adStall.fetchFn"
              :mapperFn="fields.adStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adDate.label"
          :prop="fields.adDate.name"
          :required="fields.adDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.adDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adNote.label"
          :prop="fields.adNote.name"
          :required="fields.adNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.adNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adDamages.label"
          :prop="fields.adDamages.name"
          :required="fields.adDamages.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-damages-autocomplete-input
              :fetchFn="fields.adDamages.fetchFn"
              :mapperFn="fields.adDamages.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adDamages.name]"
              mode="multiple"
            ></app-damages-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adCommissions.label"
          :prop="fields.adCommissions.name"
          :required="fields.adCommissions.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-commissions-autocomplete-input
              :fetchFn="fields.adCommissions.fetchFn"
              :mapperFn="fields.adCommissions.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adCommissions.name]"
              mode="multiple"
            ></app-commissions-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adExpenses.label"
          :prop="fields.adExpenses.name"
          :required="fields.adExpenses.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-expenses-autocomplete-input
              :fetchFn="fields.adExpenses.fetchFn"
              :mapperFn="fields.adExpenses.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adExpenses.name]"
              mode="multiple"
            ></app-expenses-autocomplete-input>
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
import { AllowanceAndDeductionModel } from '@/modules/allowance-and-deduction/allowance-and-deduction-model';

const { fields } = AllowanceAndDeductionModel;
const formSchema = new FormSchema([
  fields.id,
  fields.adRef,
  fields.adType,
  fields.adStaff,
  fields.adAmmount,
  fields.adStall,
  fields.adDate,
  fields.adNote,
  fields.adDamages,
  fields.adCommissions,
  fields.adExpenses,
]);

export default {
  name: 'app-allowance-and-deduction-form',

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
