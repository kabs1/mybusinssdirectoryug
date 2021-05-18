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
          :label="fields.transactionRef.label"
          :prop="fields.transactionRef.name"
          :required="fields.transactionRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.transactionRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transactionClass.label"
          :prop="fields.transactionClass.name"
          :required="fields.transactionClass.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.transactionClass.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.transactionClass.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transactionType.label"
          :prop="fields.transactionType.name"
          :required="fields.transactionType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.transactionType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.transactionType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transactionValue.label"
          :prop="fields.transactionValue.name"
          :required="fields.transactionValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.transactionValue.scale" :step="0.1" v-model="model[fields.transactionValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transactionIdentifier.label"
          :prop="fields.transactionIdentifier.name"
          :required="fields.transactionIdentifier.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.transactionIdentifier.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transactionSession.label"
          :prop="fields.transactionSession.name"
          :required="fields.transactionSession.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-device-sessions-autocomplete-input
              :fetchFn="fields.transactionSession.fetchFn"
              :mapperFn="fields.transactionSession.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.transactionSession.name]"
              mode="single"
            ></app-device-sessions-autocomplete-input>
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
import { TransactionsModel } from '@/modules/transactions/transactions-model';

const { fields } = TransactionsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.transactionRef,
  fields.transactionClass,
  fields.transactionType,
  fields.transactionValue,
  fields.transactionIdentifier,
  fields.transactionSession,
]);

export default {
  name: 'app-transactions-form',

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
