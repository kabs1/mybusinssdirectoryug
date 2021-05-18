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
          :label="fields.categoryCover.label"
          :prop="fields.categoryCover.name"
          :required="fields.categoryCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.categoryCover.max"
              :path="fields.categoryCover.path"
              :schema="fields.categoryCover.fileSchema"
              v-model="model[fields.categoryCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.categoryTitle.label"
          :prop="fields.categoryTitle.name"
          :required="fields.categoryTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.categoryTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.categoryShortCode.label"
          :prop="fields.categoryShortCode.name"
          :required="fields.categoryShortCode.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.categoryShortCode.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.categoryDetails.label"
          :prop="fields.categoryDetails.name"
          :required="fields.categoryDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.categoryDetails.name]" />
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
import { CategoriesModel } from '@/modules/categories/categories-model';

const { fields } = CategoriesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.categoryCover,
  fields.categoryTitle,
  fields.categoryShortCode,
  fields.categoryDetails,
]);

export default {
  name: 'app-categories-form',

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
