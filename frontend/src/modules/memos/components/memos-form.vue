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
          :label="fields.memosCover.label"
          :prop="fields.memosCover.name"
          :required="fields.memosCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.memosCover.max"
              :path="fields.memosCover.path"
              :schema="fields.memosCover.fileSchema"
              v-model="model[fields.memosCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosTitle.label"
          :prop="fields.memosTitle.name"
          :required="fields.memosTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.memosTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosDetails.label"
          :prop="fields.memosDetails.name"
          :required="fields.memosDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.memosDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosFrom.label"
          :prop="fields.memosFrom.name"
          :required="fields.memosFrom.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-staff-autocomplete-input
              :fetchFn="fields.memosFrom.fetchFn"
              :mapperFn="fields.memosFrom.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.memosFrom.name]"
              mode="multiple"
            ></app-staff-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosStartDate.label"
          :prop="fields.memosStartDate.name"
          :required="fields.memosStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.memosStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosEndDate.label"
          :prop="fields.memosEndDate.name"
          :required="fields.memosEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.memosEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memosTo.label"
          :prop="fields.memosTo.name"
          :required="fields.memosTo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.memosTo.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.memoStall.label"
          :prop="fields.memoStall.name"
          :required="fields.memoStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.memoStall.fetchFn"
              :mapperFn="fields.memoStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.memoStall.name]"
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
import { MemosModel } from '@/modules/memos/memos-model';

const { fields } = MemosModel;
const formSchema = new FormSchema([
  fields.id,
  fields.memosCover,
  fields.memosTitle,
  fields.memosDetails,
  fields.memosFrom,
  fields.memosStartDate,
  fields.memosEndDate,
  fields.memosTo,
  fields.memoStall,
]);

export default {
  name: 'app-memos-form',

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
