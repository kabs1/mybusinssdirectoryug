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
          :label="fields.productLogRef.label"
          :prop="fields.productLogRef.name"
          :required="fields.productLogRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.productLogRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogProduct.label"
          :prop="fields.productLogProduct.name"
          :required="fields.productLogProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.productLogProduct.fetchFn"
              :mapperFn="fields.productLogProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogStall.label"
          :prop="fields.productLogStall.name"
          :required="fields.productLogStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.productLogStall.fetchFn"
              :mapperFn="fields.productLogStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogSellingPrice.label"
          :prop="fields.productLogSellingPrice.name"
          :required="fields.productLogSellingPrice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogSellingPrice.scale" :step="0.1" v-model="model[fields.productLogSellingPrice.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogMargin.label"
          :prop="fields.productLogMargin.name"
          :required="fields.productLogMargin.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogMargin.scale" :step="0.1" v-model="model[fields.productLogMargin.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogBuyingPrice.label"
          :prop="fields.productLogBuyingPrice.name"
          :required="fields.productLogBuyingPrice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogBuyingPrice.scale" :step="0.1" v-model="model[fields.productLogBuyingPrice.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogCurrentStock.label"
          :prop="fields.productLogCurrentStock.name"
          :required="fields.productLogCurrentStock.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogCurrentStock.scale" :step="0.1" v-model="model[fields.productLogCurrentStock.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogSoldUnits.label"
          :prop="fields.productLogSoldUnits.name"
          :required="fields.productLogSoldUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogSoldUnits.scale" :step="0.1" v-model="model[fields.productLogSoldUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogAdjustedUnits.label"
          :prop="fields.productLogAdjustedUnits.name"
          :required="fields.productLogAdjustedUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogAdjustedUnits.scale" :step="0.1" v-model="model[fields.productLogAdjustedUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogDamagedUnits.label"
          :prop="fields.productLogDamagedUnits.name"
          :required="fields.productLogDamagedUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogDamagedUnits.scale" :step="0.1" v-model="model[fields.productLogDamagedUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogReturnedUnits.label"
          :prop="fields.productLogReturnedUnits.name"
          :required="fields.productLogReturnedUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogReturnedUnits.scale" :step="0.1" v-model="model[fields.productLogReturnedUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogPurchasedUnits.label"
          :prop="fields.productLogPurchasedUnits.name"
          :required="fields.productLogPurchasedUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogPurchasedUnits.scale" :step="0.1" v-model="model[fields.productLogPurchasedUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogTransferredUnits.label"
          :prop="fields.productLogTransferredUnits.name"
          :required="fields.productLogTransferredUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.productLogTransferredUnits.scale" :step="0.1" v-model="model[fields.productLogTransferredUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogPurchaseRef.label"
          :prop="fields.productLogPurchaseRef.name"
          :required="fields.productLogPurchaseRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-purchases-autocomplete-input
              :fetchFn="fields.productLogPurchaseRef.fetchFn"
              :mapperFn="fields.productLogPurchaseRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogPurchaseRef.name]"
              mode="multiple"
            ></app-purchases-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogSaleRef.label"
          :prop="fields.productLogSaleRef.name"
          :required="fields.productLogSaleRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-sales-autocomplete-input
              :fetchFn="fields.productLogSaleRef.fetchFn"
              :mapperFn="fields.productLogSaleRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogSaleRef.name]"
              mode="multiple"
            ></app-sales-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogReturnsRef.label"
          :prop="fields.productLogReturnsRef.name"
          :required="fields.productLogReturnsRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-returns-autocomplete-input
              :fetchFn="fields.productLogReturnsRef.fetchFn"
              :mapperFn="fields.productLogReturnsRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogReturnsRef.name]"
              mode="multiple"
            ></app-returns-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogAdjustRef.label"
          :prop="fields.productLogAdjustRef.name"
          :required="fields.productLogAdjustRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stock-adjustments-autocomplete-input
              :fetchFn="fields.productLogAdjustRef.fetchFn"
              :mapperFn="fields.productLogAdjustRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogAdjustRef.name]"
              mode="multiple"
            ></app-stock-adjustments-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogTransferredRef.label"
          :prop="fields.productLogTransferredRef.name"
          :required="fields.productLogTransferredRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stock-transfer-autocomplete-input
              :fetchFn="fields.productLogTransferredRef.fetchFn"
              :mapperFn="fields.productLogTransferredRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogTransferredRef.name]"
              mode="multiple"
            ></app-stock-transfer-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.productLogDamageRef.label"
          :prop="fields.productLogDamageRef.name"
          :required="fields.productLogDamageRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-damages-autocomplete-input
              :fetchFn="fields.productLogDamageRef.fetchFn"
              :mapperFn="fields.productLogDamageRef.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.productLogDamageRef.name]"
              mode="multiple"
            ></app-damages-autocomplete-input>
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
import { ProductLogsModel } from '@/modules/product-logs/product-logs-model';

const { fields } = ProductLogsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.productLogRef,
  fields.productLogProduct,
  fields.productLogStall,
  fields.productLogSellingPrice,
  fields.productLogMargin,
  fields.productLogBuyingPrice,
  fields.productLogCurrentStock,
  fields.productLogSoldUnits,
  fields.productLogAdjustedUnits,
  fields.productLogDamagedUnits,
  fields.productLogReturnedUnits,
  fields.productLogPurchasedUnits,
  fields.productLogTransferredUnits,
  fields.productLogPurchaseRef,
  fields.productLogSaleRef,
  fields.productLogReturnsRef,
  fields.productLogAdjustRef,
  fields.productLogTransferredRef,
  fields.productLogDamageRef,
]);

export default {
  name: 'app-product-logs-form',

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
