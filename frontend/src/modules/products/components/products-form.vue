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
          :label="fields.productImage.label"
          :prop="fields.productImage.name"
          :required="fields.productImage.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.productImage.max"
              :path="fields.productImage.path"
              :schema="fields.productImage.fileSchema"
              v-model="model[fields.productImage.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productName.label"
          :prop="fields.productName.name"
          :required="fields.productName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.productName.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productUnit.label"
          :prop="fields.productUnit.name"
          :required="fields.productUnit.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-units-autocomplete-input
              :fetchFn="fields.productUnit.fetchFn"
              :mapperFn="fields.productUnit.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productUnit.name]"
              mode="single"
            ></app-units-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productBrand.label"
          :prop="fields.productBrand.name"
          :required="fields.productBrand.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-brands-autocomplete-input
              :fetchFn="fields.productBrand.fetchFn"
              :mapperFn="fields.productBrand.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productBrand.name]"
              mode="single"
            ></app-brands-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productCategory.label"
          :prop="fields.productCategory.name"
          :required="fields.productCategory.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-categories-autocomplete-input
              :fetchFn="fields.productCategory.fetchFn"
              :mapperFn="fields.productCategory.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productCategory.name]"
              mode="single"
            ></app-categories-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productTax.label"
          :prop="fields.productTax.name"
          :required="fields.productTax.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-tax-class-autocomplete-input
              :fetchFn="fields.productTax.fetchFn"
              :mapperFn="fields.productTax.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productTax.name]"
              mode="single"
            ></app-tax-class-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productEnableStock.label"
          :prop="fields.productEnableStock.name"
          :required="fields.productEnableStock.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.productEnableStock.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.productEnableStock.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productAlertQuantity.label"
          :prop="fields.productAlertQuantity.name"
          :required="fields.productAlertQuantity.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productAlertQuantity.scale" :step="0.1" v-model="model[fields.productAlertQuantity.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productSku.label"
          :prop="fields.productSku.name"
          :required="fields.productSku.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.productSku.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productCodeType.label"
          :prop="fields.productCodeType.name"
          :required="fields.productCodeType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.productCodeType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.productCodeType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productExpiry.label"
          :prop="fields.productExpiry.name"
          :required="fields.productExpiry.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.productExpiry.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productCustomField.label"
          :prop="fields.productCustomField.name"
          :required="fields.productCustomField.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.productCustomField.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productDesc.label"
          :prop="fields.productDesc.name"
          :required="fields.productDesc.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.productDesc.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productStatus.label"
          :prop="fields.productStatus.name"
          :required="fields.productStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.productStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.productStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productVariation.label"
          :prop="fields.productVariation.name"
          :required="fields.productVariation.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-variation-autocomplete-input
              :fetchFn="fields.productVariation.fetchFn"
              :mapperFn="fields.productVariation.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productVariation.name]"
              mode="single"
            ></app-variation-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productAttribute.label"
          :prop="fields.productAttribute.name"
          :required="fields.productAttribute.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.productAttribute.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productColor.label"
          :prop="fields.productColor.name"
          :required="fields.productColor.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.productColor.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productStall.label"
          :prop="fields.productStall.name"
          :required="fields.productStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.productStall.fetchFn"
              :mapperFn="fields.productStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productStall.name]"
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
import { ProductsModel } from '@/modules/products/products-model';

const { fields } = ProductsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.productImage,
  fields.productName,
  fields.productUnit,
  fields.productBrand,
  fields.productCategory,
  fields.productTax,
  fields.productEnableStock,
  fields.productAlertQuantity,
  fields.productSku,
  fields.productCodeType,
  fields.productExpiry,
  fields.productCustomField,
  fields.productDesc,
  fields.productStatus,
  fields.productVariation,
  fields.productAttribute,
  fields.productColor,
  fields.productStall,
]);

export default {
  name: 'app-products-form',

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
