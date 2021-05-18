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
          :label="fields.stockAdjustmentRef.label"
          :prop="fields.stockAdjustmentRef.name"
          :required="fields.stockAdjustmentRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stockAdjustmentRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentProduct.label"
          :prop="fields.stockAdjustmentProduct.name"
          :required="fields.stockAdjustmentProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.stockAdjustmentProduct.fetchFn"
              :mapperFn="fields.stockAdjustmentProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.stockAdjustmentProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentType.label"
          :prop="fields.stockAdjustmentType.name"
          :required="fields.stockAdjustmentType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.stockAdjustmentType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.stockAdjustmentType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentUnits.label"
          :prop="fields.stockAdjustmentUnits.name"
          :required="fields.stockAdjustmentUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.stockAdjustmentUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.adjustmentStall.label"
          :prop="fields.adjustmentStall.name"
          :required="fields.adjustmentStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.adjustmentStall.fetchFn"
              :mapperFn="fields.adjustmentStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.adjustmentStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentsReason.label"
          :prop="fields.stockAdjustmentsReason.name"
          :required="fields.stockAdjustmentsReason.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.stockAdjustmentsReason.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentClass.label"
          :prop="fields.stockAdjustmentClass.name"
          :required="fields.stockAdjustmentClass.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.stockAdjustmentClass.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.stockAdjustmentClass.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentLoss.label"
          :prop="fields.stockAdjustmentLoss.name"
          :required="fields.stockAdjustmentLoss.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.stockAdjustmentLoss.scale" :step="0.1" v-model="model[fields.stockAdjustmentLoss.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.stockAdjustmentRecorverdAmount.label"
          :prop="fields.stockAdjustmentRecorverdAmount.name"
          :required="fields.stockAdjustmentRecorverdAmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.stockAdjustmentRecorverdAmount.scale" :step="0.1" v-model="model[fields.stockAdjustmentRecorverdAmount.name]" ></el-input-number>
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
import { StockAdjustmentsModel } from '@/modules/stock-adjustments/stock-adjustments-model';

const { fields } = StockAdjustmentsModel;
const formSchema = new FormSchema([
  fields.id,
  fields.stockAdjustmentRef,
  fields.stockAdjustmentProduct,
  fields.stockAdjustmentType,
  fields.stockAdjustmentUnits,
  fields.adjustmentStall,
  fields.stockAdjustmentsReason,
  fields.stockAdjustmentClass,
  fields.stockAdjustmentLoss,
  fields.stockAdjustmentRecorverdAmount,
]);

export default {
  name: 'app-stock-adjustments-form',

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
