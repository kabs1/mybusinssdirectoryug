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
          :label="fields.purchasesRef.label"
          :prop="fields.purchasesRef.name"
          :required="fields.purchasesRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.purchasesRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseProduct.label"
          :prop="fields.purchaseProduct.name"
          :required="fields.purchaseProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.purchaseProduct.fetchFn"
              :mapperFn="fields.purchaseProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.purchaseProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseSupplier.label"
          :prop="fields.purchaseSupplier.name"
          :required="fields.purchaseSupplier.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-suppliers-autocomplete-input
              :fetchFn="fields.purchaseSupplier.fetchFn"
              :mapperFn="fields.purchaseSupplier.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.purchaseSupplier.name]"
              mode="single"
            ></app-suppliers-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchasePaymentStatus.label"
          :prop="fields.purchasePaymentStatus.name"
          :required="fields.purchasePaymentStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.purchasePaymentStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.purchasePaymentStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseUnits.label"
          :prop="fields.purchaseUnits.name"
          :required="fields.purchaseUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.purchaseUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseTotalAmount.label"
          :prop="fields.purchaseTotalAmount.name"
          :required="fields.purchaseTotalAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.purchaseTotalAmount.scale" :step="0.1" v-model="model[fields.purchaseTotalAmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseReturnsUnits.label"
          :prop="fields.purchaseReturnsUnits.name"
          :required="fields.purchaseReturnsUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.purchaseReturnsUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseNote.label"
          :prop="fields.purchaseNote.name"
          :required="fields.purchaseNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.purchaseNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseStall.label"
          :prop="fields.purchaseStall.name"
          :required="fields.purchaseStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.purchaseStall.fetchFn"
              :mapperFn="fields.purchaseStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.purchaseStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.purchaseReturnsReason.label"
          :prop="fields.purchaseReturnsReason.name"
          :required="fields.purchaseReturnsReason.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.purchaseReturnsReason.name]" />
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
import { PurchasesModel } from '@/modules/purchases/purchases-model';

const { fields } = PurchasesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.purchasesRef,
  fields.purchaseProduct,
  fields.purchaseSupplier,
  fields.purchasePaymentStatus,
  fields.purchaseUnits,
  fields.purchaseTotalAmount,
  fields.purchaseReturnsUnits,
  fields.purchaseNote,
  fields.purchaseStall,
  fields.purchaseReturnsReason,
]);

export default {
  name: 'app-purchases-form',

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
