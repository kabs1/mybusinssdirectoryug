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
          :label="fields.salesInvoiceNo.label"
          :prop="fields.salesInvoiceNo.name"
          :required="fields.salesInvoiceNo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.salesInvoiceNo.name]" ref="focus" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesCustomer.label"
          :prop="fields.salesCustomer.name"
          :required="fields.salesCustomer.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-customers-autocomplete-input
              :fetchFn="fields.salesCustomer.fetchFn"
              :mapperFn="fields.salesCustomer.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesCustomer.name]"
              mode="single"
            ></app-customers-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesPaymentStatus.label"
          :prop="fields.salesPaymentStatus.name"
          :required="fields.salesPaymentStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.salesPaymentStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.salesPaymentStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesTotalAmount.label"
          :prop="fields.salesTotalAmount.name"
          :required="fields.salesTotalAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.salesTotalAmount.scale" :step="0.1" v-model="model[fields.salesTotalAmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesSubTotalAmount.label"
          :prop="fields.salesSubTotalAmount.name"
          :required="fields.salesSubTotalAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.salesSubTotalAmount.scale" :step="0.1" v-model="model[fields.salesSubTotalAmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesTotalTax.label"
          :prop="fields.salesTotalTax.name"
          :required="fields.salesTotalTax.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.salesTotalTax.scale" :step="0.1" v-model="model[fields.salesTotalTax.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesProducts.label"
          :prop="fields.salesProducts.name"
          :required="fields.salesProducts.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.salesProducts.fetchFn"
              :mapperFn="fields.salesProducts.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesProducts.name]"
              mode="multiple"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesTotalIUnits.label"
          :prop="fields.salesTotalIUnits.name"
          :required="fields.salesTotalIUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.salesTotalIUnits.scale" :step="0.1" v-model="model[fields.salesTotalIUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.saleNote.label"
          :prop="fields.saleNote.name"
          :required="fields.saleNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.saleNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesDiscount.label"
          :prop="fields.salesDiscount.name"
          :required="fields.salesDiscount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.salesDiscount.scale" :step="0.1" v-model="model[fields.salesDiscount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesPayload.label"
          :prop="fields.salesPayload.name"
          :required="fields.salesPayload.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salesPayload.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.saleReturnsProducts.label"
          :prop="fields.saleReturnsProducts.name"
          :required="fields.saleReturnsProducts.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.saleReturnsProducts.fetchFn"
              :mapperFn="fields.saleReturnsProducts.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.saleReturnsProducts.name]"
              mode="multiple"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.saleReturnsUnits.label"
          :prop="fields.saleReturnsUnits.name"
          :required="fields.saleReturnsUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-product-count-autocomplete-input
              :fetchFn="fields.saleReturnsUnits.fetchFn"
              :mapperFn="fields.saleReturnsUnits.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.saleReturnsUnits.name]"
              mode="multiple"
            ></app-product-count-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesReturnReason.label"
          :prop="fields.salesReturnReason.name"
          :required="fields.salesReturnReason.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salesReturnReason.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salePaymentDetails.label"
          :prop="fields.salePaymentDetails.name"
          :required="fields.salePaymentDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salePaymentDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salePaymentType.label"
          :prop="fields.salePaymentType.name"
          :required="fields.salePaymentType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salePaymentType.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.saleCreditBalance.label"
          :prop="fields.saleCreditBalance.name"
          :required="fields.saleCreditBalance.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.saleCreditBalance.scale" :step="0.1" v-model="model[fields.saleCreditBalance.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.saleDevice.label"
          :prop="fields.saleDevice.name"
          :required="fields.saleDevice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-devices-autocomplete-input
              :fetchFn="fields.saleDevice.fetchFn"
              :mapperFn="fields.saleDevice.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.saleDevice.name]"
              mode="single"
            ></app-devices-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCard.label"
          :prop="fields.giftCard.name"
          :required="fields.giftCard.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-gift-card-autocomplete-input
              :fetchFn="fields.giftCard.fetchFn"
              :mapperFn="fields.giftCard.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.giftCard.name]"
              mode="single"
            ></app-gift-card-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesCoupon.label"
          :prop="fields.salesCoupon.name"
          :required="fields.salesCoupon.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-coupon-autocomplete-input
              :fetchFn="fields.salesCoupon.fetchFn"
              :mapperFn="fields.salesCoupon.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesCoupon.name]"
              mode="single"
            ></app-coupon-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesStall.label"
          :prop="fields.salesStall.name"
          :required="fields.salesStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.salesStall.fetchFn"
              :mapperFn="fields.salesStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesRegister.label"
          :prop="fields.salesRegister.name"
          :required="fields.salesRegister.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-register-autocomplete-input
              :fetchFn="fields.salesRegister.fetchFn"
              :mapperFn="fields.salesRegister.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesRegister.name]"
              mode="single"
            ></app-register-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesProductsCount.label"
          :prop="fields.salesProductsCount.name"
          :required="fields.salesProductsCount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-product-count-autocomplete-input
              :fetchFn="fields.salesProductsCount.fetchFn"
              :mapperFn="fields.salesProductsCount.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesProductsCount.name]"
              mode="multiple"
            ></app-product-count-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesProductsValue.label"
          :prop="fields.salesProductsValue.name"
          :required="fields.salesProductsValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-product-value-autocomplete-input
              :fetchFn="fields.salesProductsValue.fetchFn"
              :mapperFn="fields.salesProductsValue.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesProductsValue.name]"
              mode="multiple"
            ></app-product-value-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesPaymentMethod.label"
          :prop="fields.salesPaymentMethod.name"
          :required="fields.salesPaymentMethod.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-payment-methods-autocomplete-input
              :fetchFn="fields.salesPaymentMethod.fetchFn"
              :mapperFn="fields.salesPaymentMethod.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.salesPaymentMethod.name]"
              mode="multiple"
            ></app-payment-methods-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesItemLoad.label"
          :prop="fields.salesItemLoad.name"
          :required="fields.salesItemLoad.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salesItemLoad.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.salesReceipt.label"
          :prop="fields.salesReceipt.name"
          :required="fields.salesReceipt.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.salesReceipt.name]" />
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
import { SalesModel } from '@/modules/sales/sales-model';

const { fields } = SalesModel;
const formSchema = new FormSchema([
  fields.id,
  fields.salesInvoiceNo,
  fields.salesCustomer,
  fields.salesPaymentStatus,
  fields.salesTotalAmount,
  fields.salesSubTotalAmount,
  fields.salesTotalTax,
  fields.salesProducts,
  fields.salesTotalIUnits,
  fields.saleNote,
  fields.salesDiscount,
  fields.salesPayload,
  fields.saleReturnsProducts,
  fields.saleReturnsUnits,
  fields.salesReturnReason,
  fields.salePaymentDetails,
  fields.salePaymentType,
  fields.saleCreditBalance,
  fields.saleDevice,
  fields.giftCard,
  fields.salesCoupon,
  fields.salesStall,
  fields.salesRegister,
  fields.salesProductsCount,
  fields.salesProductsValue,
  fields.salesPaymentMethod,
  fields.salesItemLoad,
  fields.salesReceipt,
]);

export default {
  name: 'app-sales-form',

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
