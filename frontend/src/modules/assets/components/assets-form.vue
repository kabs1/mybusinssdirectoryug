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
          :label="fields.assetImage.label"
          :prop="fields.assetImage.name"
          :required="fields.assetImage.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.assetImage.max"
              :path="fields.assetImage.path"
              :schema="fields.assetImage.fileSchema"
              v-model="model[fields.assetImage.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetName.label"
          :prop="fields.assetName.name"
          :required="fields.assetName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.assetName.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetDetails.label"
          :prop="fields.assetDetails.name"
          :required="fields.assetDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.assetDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetValue.label"
          :prop="fields.assetValue.name"
          :required="fields.assetValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.assetValue.scale" :step="0.1" v-model="model[fields.assetValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetDocs.label"
          :prop="fields.assetDocs.name"
          :required="fields.assetDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.assetDocs.max"
              :path="fields.assetDocs.path"
              :schema="fields.assetDocs.fileSchema"
              v-model="model[fields.assetDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetsStall.label"
          :prop="fields.assetsStall.name"
          :required="fields.assetsStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.assetsStall.fetchFn"
              :mapperFn="fields.assetsStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.assetsStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.assetPurchaseDate.label"
          :prop="fields.assetPurchaseDate.name"
          :required="fields.assetPurchaseDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.assetPurchaseDate.name]"></el-date-picker>
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
import { AssetsModel } from '@/modules/assets/assets-model';

const { fields } = AssetsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.assetImage,
  fields.assetName,
  fields.assetDetails,
  fields.assetValue,
  fields.assetDocs,
  fields.assetsStall,
  fields.assetPurchaseDate,
]);

export default {
  name: 'app-assets-form',

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
