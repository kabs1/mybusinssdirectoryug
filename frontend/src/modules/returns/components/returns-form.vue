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
          :label="fields.returnRefNo.label"
          :prop="fields.returnRefNo.name"
          :required="fields.returnRefNo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.returnRefNo.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnProduct.label"
          :prop="fields.returnProduct.name"
          :required="fields.returnProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.returnProduct.fetchFn"
              :mapperFn="fields.returnProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.returnProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnUnits.label"
          :prop="fields.returnUnits.name"
          :required="fields.returnUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.returnUnits.scale" :step="0.1" v-model="model[fields.returnUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnReason.label"
          :prop="fields.returnReason.name"
          :required="fields.returnReason.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.returnReason.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnsFrom.label"
          :prop="fields.returnsFrom.name"
          :required="fields.returnsFrom.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.returnsFrom.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.returnsFrom.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnIdentifier.label"
          :prop="fields.returnIdentifier.name"
          :required="fields.returnIdentifier.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.returnIdentifier.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.returnStall.label"
          :prop="fields.returnStall.name"
          :required="fields.returnStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.returnStall.fetchFn"
              :mapperFn="fields.returnStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.returnStall.name]"
              mode="single"
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
import { ReturnsModel } from '@/modules/returns/returns-model';

const { fields } = ReturnsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.returnRefNo,
  fields.returnProduct,
  fields.returnUnits,
  fields.returnReason,
  fields.returnsFrom,
  fields.returnIdentifier,
  fields.returnStall,
]);

export default {
  name: 'app-returns-form',

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
