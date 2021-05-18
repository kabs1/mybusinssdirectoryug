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
          :label="fields.couponCode.label"
          :prop="fields.couponCode.name"
          :required="fields.couponCode.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.couponCode.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponType.label"
          :prop="fields.couponType.name"
          :required="fields.couponType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.couponType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.couponType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponValue.label"
          :prop="fields.couponValue.name"
          :required="fields.couponValue.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.couponValue.scale" :step="0.1" v-model="model[fields.couponValue.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponMinAmount.label"
          :prop="fields.couponMinAmount.name"
          :required="fields.couponMinAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.couponMinAmount.scale" :step="0.1" v-model="model[fields.couponMinAmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponStartDate.label"
          :prop="fields.couponStartDate.name"
          :required="fields.couponStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.couponStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponEndDate.label"
          :prop="fields.couponEndDate.name"
          :required="fields.couponEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.couponEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponStall.label"
          :prop="fields.couponStall.name"
          :required="fields.couponStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.couponStall.fetchFn"
              :mapperFn="fields.couponStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.couponStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponStatus.label"
          :prop="fields.couponStatus.name"
          :required="fields.couponStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.couponStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.couponStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponMaxUse.label"
          :prop="fields.couponMaxUse.name"
          :required="fields.couponMaxUse.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.couponMaxUse.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponUsageCount.label"
          :prop="fields.couponUsageCount.name"
          :required="fields.couponUsageCount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.couponUsageCount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.couponSalesUsed.label"
          :prop="fields.couponSalesUsed.name"
          :required="fields.couponSalesUsed.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-sales-autocomplete-input
              :fetchFn="fields.couponSalesUsed.fetchFn"
              :mapperFn="fields.couponSalesUsed.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.couponSalesUsed.name]"
              mode="multiple"
            ></app-sales-autocomplete-input>
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
import { CouponModel } from '@/modules/coupon/coupon-model';

const { fields } = CouponModel;
const formSchema = new FormSchema([
  fields.id,
  fields.couponCode,
  fields.couponType,
  fields.couponValue,
  fields.couponMinAmount,
  fields.couponStartDate,
  fields.couponEndDate,
  fields.couponStall,
  fields.couponStatus,
  fields.couponMaxUse,
  fields.couponUsageCount,
  fields.couponSalesUsed,
]);

export default {
  name: 'app-coupon-form',

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
