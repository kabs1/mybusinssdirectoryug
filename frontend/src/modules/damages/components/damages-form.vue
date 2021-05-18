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
          :label="fields.damageCover.label"
          :prop="fields.damageCover.name"
          :required="fields.damageCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.damageCover.max"
              :path="fields.damageCover.path"
              :schema="fields.damageCover.fileSchema"
              v-model="model[fields.damageCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageRef.label"
          :prop="fields.damageRef.name"
          :required="fields.damageRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.damageRef.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageProduct.label"
          :prop="fields.damageProduct.name"
          :required="fields.damageProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.damageProduct.fetchFn"
              :mapperFn="fields.damageProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.damageProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageDate.label"
          :prop="fields.damageDate.name"
          :required="fields.damageDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.damageDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageCausedBy.label"
          :prop="fields.damageCausedBy.name"
          :required="fields.damageCausedBy.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.damageCausedBy.fetchFn"
              :mapperFn="fields.damageCausedBy.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.damageCausedBy.name]"
              mode="multiple"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageAmmount.label"
          :prop="fields.damageAmmount.name"
          :required="fields.damageAmmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.damageAmmount.scale" :step="0.1" v-model="model[fields.damageAmmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageNote.label"
          :prop="fields.damageNote.name"
          :required="fields.damageNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.damageNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageDocs.label"
          :prop="fields.damageDocs.name"
          :required="fields.damageDocs.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.damageDocs.max"
              :path="fields.damageDocs.path"
              :schema="fields.damageDocs.fileSchema"
              v-model="model[fields.damageDocs.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.damageStall.label"
          :prop="fields.damageStall.name"
          :required="fields.damageStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.damageStall.fetchFn"
              :mapperFn="fields.damageStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.damageStall.name]"
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
import { DamagesModel } from '@/modules/damages/damages-model';

const { fields } = DamagesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.damageCover,
  fields.damageRef,
  fields.damageProduct,
  fields.damageDate,
  fields.damageCausedBy,
  fields.damageAmmount,
  fields.damageNote,
  fields.damageDocs,
  fields.damageStall,
]);

export default {
  name: 'app-damages-form',

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
