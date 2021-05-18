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
          :label="fields.todoTitle.label"
          :prop="fields.todoTitle.name"
          :required="fields.todoTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.todoTitle.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoNote.label"
          :prop="fields.todoNote.name"
          :required="fields.todoNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.todoNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoStaff.label"
          :prop="fields.todoStaff.name"
          :required="fields.todoStaff.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.todoStaff.fetchFn"
              :mapperFn="fields.todoStaff.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.todoStaff.name]"
              mode="multiple"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoStatus.label"
          :prop="fields.todoStatus.name"
          :required="fields.todoStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.todoStatus.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.todoStatus.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoStartDate.label"
          :prop="fields.todoStartDate.name"
          :required="fields.todoStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.todoStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoEndDate.label"
          :prop="fields.todoEndDate.name"
          :required="fields.todoEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.todoEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoRating.label"
          :prop="fields.todoRating.name"
          :required="fields.todoRating.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.todoRating.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.todoStall.label"
          :prop="fields.todoStall.name"
          :required="fields.todoStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.todoStall.fetchFn"
              :mapperFn="fields.todoStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.todoStall.name]"
              mode="multiple"
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
import { TodoModel } from '@/modules/todo/todo-model';

const { fields } = TodoModel;
const formSchema = new FormSchema([
  fields.id,
  fields.todoTitle,
  fields.todoNote,
  fields.todoStaff,
  fields.todoStatus,
  fields.todoStartDate,
  fields.todoEndDate,
  fields.todoRating,
  fields.todoStall,
]);

export default {
  name: 'app-todo-form',

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
