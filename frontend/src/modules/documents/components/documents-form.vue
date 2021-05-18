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
          :label="fields.documentTitle.label"
          :prop="fields.documentTitle.name"
          :required="fields.documentTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.documentTitle.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.documentDetails.label"
          :prop="fields.documentDetails.name"
          :required="fields.documentDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.documentDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.documentType.label"
          :prop="fields.documentType.name"
          :required="fields.documentType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-document-types-autocomplete-input
              :fetchFn="fields.documentType.fetchFn"
              :mapperFn="fields.documentType.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.documentType.name]"
              mode="single"
            ></app-document-types-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.docStall.label"
          :prop="fields.docStall.name"
          :required="fields.docStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.docStall.fetchFn"
              :mapperFn="fields.docStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.docStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.documentFile.label"
          :prop="fields.documentFile.name"
          :required="fields.documentFile.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.documentFile.max"
              :path="fields.documentFile.path"
              :schema="fields.documentFile.fileSchema"
              v-model="model[fields.documentFile.name]"
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
import { DocumentsModel } from '@/modules/documents/documents-model';

const { fields } = DocumentsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.documentTitle,
  fields.documentDetails,
  fields.documentType,
  fields.docStall,
  fields.documentFile,
]);

export default {
  name: 'app-documents-form',

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
