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
          :label="fields.expenseCover.label"
          :prop="fields.expenseCover.name"
          :required="fields.expenseCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.expenseCover.max"
              :path="fields.expenseCover.path"
              :schema="fields.expenseCover.fileSchema"
              v-model="model[fields.expenseCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expensesTitle.label"
          :prop="fields.expensesTitle.name"
          :required="fields.expensesTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.expensesTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expensesCost.label"
          :prop="fields.expensesCost.name"
          :required="fields.expensesCost.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.expensesCost.scale" :step="0.1" v-model="model[fields.expensesCost.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseMadeTo.label"
          :prop="fields.expenseMadeTo.name"
          :required="fields.expenseMadeTo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.expenseMadeTo.fetchFn"
              :mapperFn="fields.expenseMadeTo.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.expenseMadeTo.name]"
              mode="multiple"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expensesMadeBy.label"
          :prop="fields.expensesMadeBy.name"
          :required="fields.expensesMadeBy.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.expensesMadeBy.fetchFn"
              :mapperFn="fields.expensesMadeBy.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.expensesMadeBy.name]"
              mode="single"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expensesDate.label"
          :prop="fields.expensesDate.name"
          :required="fields.expensesDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.expensesDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expensesStatus.label"
          :prop="fields.expensesStatus.name"
          :required="fields.expensesStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.expensesStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.expensesStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseStall.label"
          :prop="fields.expenseStall.name"
          :required="fields.expenseStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.expenseStall.fetchFn"
              :mapperFn="fields.expenseStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.expenseStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseNote.label"
          :prop="fields.expenseNote.name"
          :required="fields.expenseNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.expenseNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseDocs.label"
          :prop="fields.expenseDocs.name"
          :required="fields.expenseDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.expenseDocs.max"
              :path="fields.expenseDocs.path"
              :schema="fields.expenseDocs.fileSchema"
              v-model="model[fields.expenseDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.expenseDoc.label"
          :prop="fields.expenseDoc.name"
          :required="fields.expenseDoc.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.expenseDoc.max"
              :path="fields.expenseDoc.path"
              :schema="fields.expenseDoc.fileSchema"
              v-model="model[fields.expenseDoc.name]"
            ></app-file-upload>
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
import { ExpensesModel } from '@/modules/expenses/expenses-model';

const { fields } = ExpensesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.expenseCover,
  fields.expensesTitle,
  fields.expensesCost,
  fields.expenseMadeTo,
  fields.expensesMadeBy,
  fields.expensesDate,
  fields.expensesStatus,
  fields.expenseStall,
  fields.expenseNote,
  fields.expenseDocs,
  fields.expenseDoc,
]);

export default {
  name: 'app-expenses-form',

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
